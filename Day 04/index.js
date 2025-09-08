import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("This is the root route.");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
