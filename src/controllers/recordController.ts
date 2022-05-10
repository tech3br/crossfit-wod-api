import { Request, Response } from "express";
import recordService from "../services/recordService";
import { WorkoutProps } from "../types/workout";

const getRecordForWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;

  try {
    const allWorkouts = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: allWorkouts });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export default { getRecordForWorkout };
