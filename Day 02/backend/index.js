import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

// ------ Defining routes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "This is the Joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "This is the Joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "This is the Joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "This is the Joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "This is the Joke 5",
    },
  ];

  res.send(jokes);
});

// ------ Server Listening

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
