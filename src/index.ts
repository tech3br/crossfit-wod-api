import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express } from "express";
import v1WorkoutRouter from "./v1/routes/workoutRoutes";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
