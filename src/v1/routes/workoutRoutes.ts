import express from "express";
import workoutController from "../../controllers/workoutController";
import recordController from "../../controllers/recordController";

const router = express.Router();

router.post("/", workoutController.createNewWorkout);

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

export default router;
