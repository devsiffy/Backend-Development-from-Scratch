<h2>🖥️ Backend Mastery: From Zero to Backend Hero 🔥</h2>

```
NOTE:- The "must_change.env" must require some changes;
     > remove the word "must_change.env" and change it into ".env" only
     > replace values with your own credentials inside .env file
```

<h3>📅 Day 01</h3>

> _"The journey of a thousand miles begins with one step."_

1. **Project Initialization**

   -  package.json setup
   -  Install Express & dotenv
      <br />

2. **Configuration**

   -  Create .env file (PORT)
   -  Build server (index.js)
      <br />

3. **Routing & Server**
   -  Define GET routes (/, /login, /signup)
   -  Start server

---

<h3>📅 Day 02</h3>

> _"Code is like humor. When you have to explain it, it’s bad."_

1. **API Fundamentals**

   -  What is an API
   -  Role in frontend-backend communication
      <br />

2. **Working with APIs in React**

   -  Fetch vs Axios comparison
   -  Axios GET request with then() & catch()
   -  Best practices (useEffect, useState, error handling)
      <br />

3. **Handling CORS Issues**
   -  What is CORS
   -  Proxy setup in Vite
   -  Backend solutions (cors package, headers)

---

<h3>📅 Day 03</h3>

> _"Structure your data before you build — clean models lead to clean code."_

1. **Data Modeling Basics**

   -  Object modeling purpose
   -  Benefits of early planning
      <br />

2. **Introduction to Mongoose**

   -  What is Mongoose
   -  Schemas and models
      <br />

3. **Project Structure & Naming Conventions**

   -  `models/` folder setup
   -  File naming patterns
      <br />

4. **Schema Definition Essentials**

   -  Field types and rules
   -  Common validations (required, unique, min, etc.)
   -  Timestamps for created/updated tracking
   -  Model Relationships: Using `ref` for associations

---

<h3>📅 Day 04</h3>

> _"Learning to write programs stretches your mind, and helps you think better."_

1. **Data Modeling Practice**

   -  E-Commerce Store Schema Design
   -  Hospital Management System Schema Design
      <br />

2. **Exploring Mongoose Concepts**

   -  Review: `models/ecommerce/`
   -  Review: `models/hospital_management/`

---

<h3>📅 Day 05 </h3>

> _"A well-structured project is the foundation of professional software development."_

1. **UI/UX Design & DB Planning Phase**

   -  Design all screens using tools like Figma
   -  Collect data points for DB
   -  Create data modeling diagram (with tools like Eraser.io)
      <br />

2. **Project Initialization & Structuring**

   -  Initialize `package.json` with `npm init`
   -  Setup common folders: `src`, `public`, `controllers`, `routes`, etc.
   -  Create essential files: `.env`, `.gitignore`, `README.md`, etc.
      <br />

3. **Development Tools Setup**

   -  Install `nodemon` for auto-restart
   -  Install `prettier` for consistent formatting
      <br />

4. **Files Configuration**

   -  Use online generator to create `.gitignore` for Node.js
   -  Add `.prettierrc` and `.prettierignore` files
   -  Update `package.json` for modules and scripts

---

<h3>📅 Day 06</h3>

> _"Build software the way real teams do – step by step, piece by piece."_

1. **MongoDB Atlas**

   -  Create account, project, cluster
   -  Save URI in `.env`
      <br />

2. **DB Connection**

   -  Two connection approaches:
      Direct connect in `index.js` (less modular)
      Use `src/db/connection.js`
   -  Best Practices: Use `async/await` + `try/catch`
      <br />

3. **Import Rules**

   -  Load `dotenv` at top of entry file
   -  Add `.js` extension to imports
   -  Keep secrets in `.env`
   -  Keep `index.js` clean

---

<h3>📅 Day 07 </h3>

> _"Building real-world back-end architecture step by step."_

1. **Express App Setup (`app.js`)**

   -  Middlewares: `cors`, `cookieParser`, `express.json`, etc.
      <br />

2. **Server Initialization (`index.js`)**

   -  DB connection, server start, and error handling
      <br />

3. **Utility Modules (`utils/`)**

   -  `asyncHandler.js` – async error wrapper
   -  `ApiError.js` – custom error class
   -  `ApiResponse.js` – consistent success responses

---

<h3>📅 Day 08</h3>

> _"Professional backend development through real-world modeling techniques."_

1. **Model Structure & Setup**

   -  Created `user.model.js` and `video.model.js` using Mongoose
   -  Used ObjectId references, timestamps, and schema validation  
      <br />

2. **User Model & Authentication**

   -  Defined user fields
   -  Password hashing with `bcrypt` using Mongoose pre-save middleware
   -  Custom methods for authentication:
      -  Password verification (`bcrypt`)
      -  JWT generation (`jsonwebtoken`) for access & refresh tokens
   -  Stored secrets and token expiry settings in `.env`
      <br />

3. **Video Model & Pagination**

   -  Defined video fields
   -  Linked each video to its owner (User)
   -  Added pagination support using `mongoose-aggregate-paginate-v2`

---

<h3>📅 Day 09</h3>

> _"Code is the bridge between imagination and reality; every bug you fix is a step forward."_

1. **Cloudinary Setup**

   -  Creating an account and adding credentials in `.env`
   -  Installing npm package `cloudinary` and configure
   -  Functions to upload files and handle errors
      <br />

2. **Multer Setup**

   -  Installing npm package `multer`
   -  Define multer as middleware
   -  Multer uses for temporary file storage, and works with Cloudinary

---

<h3>📅 Day 10</h3>

> _"The web speaks in protocols — learn their language to unlock endless possibilities."_

1. **HTTP Basics**

   -  Overview
   -  HTTP vs HTTPS
   -  Client-Server Model
   -  URL, URI, URN
      <br />

2. **HTTP Headers**

   -  Purpose and importance
   -  Types: Request, Response, Representation, Payload
   -  Key headers: Authorization, Content-Type, CORS
      <br />

3. **HTTP Methods**

   -  Main verbs: GET, POST, PUT, PATCH, DELETE
   -  Others: HEAD, OPTIONS, TRACE
      <br />

4. **HTTP Status Codes**

   -  Categories: 1xx to 5xx
   -  Common codes: 200, 201, 400, 401, 403, 404, 500

---

<h3>📅 Day 11</h3>

> _"Building like a pro — following real-world back-end development practices."_

1. **Express Router & Route Management**

   -  Using Express Router
   -  Exporting and importing router in `app.js`
   -  Mounting routes with `app.use()`
      <br />

2. **Controller Functions & JSON Responses**

   -  Writing controller functions
   -  Sending JSON responses with status codes
   -  Example: `registerUser` controller returning a success message
      <br />

3. **Error Handling with `asyncHandler`**

   -  Wrapping controllers to handle async errors
   -  Avoiding repetitive try-catch blocks
   -  Passing errors to Express using `next(error)`
      <br />

4. **API Testing with Postman**
   -  Creating collections and requests
   -  Testing POST routes like `/register`
   -  Verifying JSON response and status codes

---

<h3>📅 Day 12</h3>

> _"Building like real professionals, one step at a time."_

1. **User Registration Workflow**

   -  Input validation and duplication checks
   -  Image handling and upload (avatar, cover)
   -  User creation and sensitive data filtering
   -  Structured API response to frontend
      <br />

2. **File Management**

   -  Local file handling with Multer
   -  Cloudinary integration for media uploads
      <br />

3. **Error Handling & API Response**

   -  Centralized error responses using `ApiError`
   -  Consistent success responses via `ApiResponse`

---

<h3>📅 Day 13</h3>

> _"Building like real devs — one step at a time."_

1. **User Registration API**

   -  Testing `/api/v1/users/register` using POSTMAN
   -  Required form-data fields: fullName, email, username, password, avatar, coverImage
   -  Backend tasks: validation, duplication checks, Cloudinary upload, DB save, response handling
      <br />

2. **Cloudinary Bug Fixes**

   -  Bug in `cloudinary.js` due to delayed `dotenv.config()`
   -  Environment variables not loading (`CLOUDINARY_CLOUD_NAME`, etc.)
   -  Fixes applied in:
      -  `src/index.js` (moved `dotenv.config()` above imports)
      -  `package.json` (`nodemon -r dotenv/config ...`)
         <br />

3. **Local File Cleanup After Upload**

   -  Deleting uploaded files from `public/temp` after Cloudinary upload
   -  Using `fs.unlinkSync()` in both success and error cases
      <br />

4. **Professional Use of POSTMAN**

   -  Organizing with Collections (e.g., `MediaTube`) and Folders (e.g., `user`)
   -  Creating and using Environment Variables (`server` = base URL)
   -  Replacing hardcoded URLs with `{{server}}` variable in requests

---

<h3>📅 Day 14</h3>

> _"Building a real-world back-end system using professional development practices."_

1. **Authentication Flow**

   -  `/login` Route
   -  `/logout` Route
   -  `loginUser` Controller
   -  `logoutUser` Controller
      <br />

2. **Token Management**

   -  Access & Refresh Token Generator
   -  Sending Tokens as Secure Cookies
   -  Removing Tokens via Cookies on Logout
      <br />

3. **Security Middleware**
   -  `verifyJWT` Middleware for Protected Routes
   -  Token Validation via Cookies or Headers

---

<h3>📅 Day 15</h3>

> _"Simulating a real-world back-end development process used in professional software companies."_

1. **Authentication Route Testing**

   -  Testing `/login` and `/logout` using POSTMAN
   -  Expected request structure and responses
   -  Cookie handling for tokens
      <br />

2. **Login Controller Debugging**

   -  Common login issues (missing fields, invalid credentials, etc.)
   -  Proper use of async/await and error handling
   -  Security tips: avoid exposing sensitive data
      <br />

3. **Token-Based Authentication**

   -  Access Token: purpose, lifespan, and usage
   -  Refresh Token: role in session management and renewal
   -  Key differences between access and refresh tokens
   -  How both tokens work together in maintaining user sessions
      <br />

4. **Refresh Token Implementation**
   -  `/refresh-token` route functionality
   -  Validating refresh tokens and issuing new tokens
   -  Security practices: HttpOnly cookies, database checks
   -  Frontend behavior on token expiration

---

<h3>📅 Day 16</h3>

> _"Building a scalable backend by following real-world development practices."_

1. **Subscription Model**

   -  Mongoose schema for user-to-user subscriptions
   -  Fields: `subscriber`, `channel` (both linked to User model)
   -  Includes timestamps for creation and updates
      <br />

2. **User Account Management**

   -  `Password Management:`
      Change current password with verification

   -  `Profile Information:`
      Get current logged-in user details
      Update full name and email (excluding password)

   -  `Media Uploads:`
      Update user avatar (profile picture)
      Update cover image (banner)

---

<h3>📅 Day 17</h3>

> _"Note:- You can see the 'day 17.png' image for visual understanding"_

1. **Designing the Subscription Model**

   -  Purpose of the Subscription Model
   -  Why not use arrays in the User schema
   -  One subscription per document structure
   -  Advantages of this Approach
      <br />

2. **Querying Subscriptions**

   -  Counting a channel’s subscribers
   -  Listing channels a user has subscribed to

---

<h3>📅 Day 18</h3>

> _"Building real-world features using professional backend practices."_

1. **MongoDB Aggregation Pipeline**

   -  What is Aggregation Pipeline
   -  Why and when to use it
   -  Benefits for complex data querying
      <br />

2. **Aggregation Stages**

   -  `$match` – Filter documents
   -  `$lookup` – Join collections
   -  `$addFields` – Add or modify fields
   -  `$project` – Select specific fields
   -  `$sort`, `$limit`, `$group`, `$unwind`
      <br />

3. **Common Operators**

   -  `$in` – Check if value exists in array
   -  `$cond` – If-then-else logic
   -  `$size`, `$eq`, `$and`, `$or`

---

<h3>📅 Day 19</h3>

> _"Building real-world back-end features, step by step, like a pro."_

1. **Watch History Feature**

   -  Defining `getWatchHistory` controller
   -  MongoDB Aggregation Pipeline usage
   -  Step-by-step data retrieval and joining
      <br />

2. **User Routes & Structure**

   -  Defining routes for controllers
   -  Public Routes: `/register`, `/login`
   -  Protected Routes: `/logout`, `/history`, `/update-account`, etc.
      <br />

3. **Route Protection & Middleware**
   -  JWT authentication using `verifyJWT`
   -  File upload handling with `upload` middleware

---

<h3>📅 Day 20</h3>

> _"Expanding the backend with essential user and content models."_

1. **Created More Models**

   -  `Comment` Model - content, video, owner

   -  `Like` Model - video | comment | tweet, likedBy

   -  `Playlist` Model - name, description, videos, owner

   -  `Tweet` Model - content, owner

---

<h3>📅 Day 21</h3>

> _Simple structure, clear steps, professional workflow._

1. **User Routes Tested**

   -  Tested all `user routes` using `Postman`
   -  Fixed small bugs
   -  Now user routes are working perfectly
      <br />

2. **Routes & Controllers Setup**

   -  All routes defined in `app.js`
   -  Created routes in `src/routes/` for:
      -  tweet, video, comment, like, playlist, subscription, dashboard
   -  Created controllers in `src/controllers/` with:
      -  Empty methods
      -  `// TASK:` comments showing what logic to add later
         <br />

3. **What Do Next**

   -  Add real logic inside controller methods
   -  Test each route using Postman
   -  Make sure everything works correctly
