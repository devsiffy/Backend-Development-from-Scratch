require("dotenv").config();

const express = require("express");
const app = express();

// ----- Home Route

app.get("/", (req, res) => {
  res.send("This is a home route");
});

// ----- Login Route

app.get("/login", (req, res) => {
  res.send("<h1>This is a login route</h1>");
});

// ----- Signup Route

app.get("/signup", (req, res) => {
  res.json({
    message: "This is a signup route",
  });
});

// ----- Server Listening

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
