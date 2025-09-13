import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("SERVER LISTENING ERROR => ", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB CONNECTION ERROR => ", error);
  });
