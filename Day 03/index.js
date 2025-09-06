import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

// ------ Defining Routes

app.get("/", (req, res) => {
  res.send("This is a root route..!");
});

// ------ Server Listening

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
