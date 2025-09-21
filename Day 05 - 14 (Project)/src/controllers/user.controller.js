import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/* 
  ----------------
  Tokens Generator
  ----------------
*/

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

/* 
  -------------
  Register User
  -------------
*/

const registerUser = asyncHandler(async (req, res) => {
  // ---- get user details from frontend

  const { fullName, email, username, password } = req.body;

  // ---- validation - not empty

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // ---- check if user already exists: username, email

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }

  // ---- check for images, check for avatar

  const avatarLocalPath = req.files?.avatar[0]?.path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  // ---- upload them to cloudinary, avatar

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }

  // ---- create user object - create entry in db

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  // ---- remove password and refresh token field from response

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // ---- check for user creation

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // ---- return response

  res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

/* 
  -----------
  Log-in User
  -----------
*/

const loginUser = asyncHandler(async (req, res) => {
  // ---- get user details from frontend

  const { username, email, password } = req.body;

  // ---- check for username or email

  if (!username || !email) {
    throw new ApiError(400, "username or email is required");
  }

  // ---- find the user using username or email

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User doesn't exist");
  }

  // ---- check for password

  const isPasswordValid = await user.isPasswordValidate(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // ---- generate access & refresh tokens

  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(
    user._id
  );

  // ---- user without password & refreshToken for response

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // ---- sending cookies, status and json in response

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

/* 
  -----------
  Logout User
  -----------
*/

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: undefined,
    },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

export { registerUser, loginUser, logoutUser };
