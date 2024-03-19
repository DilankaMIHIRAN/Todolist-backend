import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

const app = express();
app.use(express.json());
app.use(cors());



//connect to database
mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => console.log("connected to database"));

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("Server started on localhost:7000 💖");
});
