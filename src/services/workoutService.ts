import { v4 as uuid } from "uuid";
import Workout from "../database/Workout";
import { WorkoutProps } from "../types/workout";

/** List all workouts */
const getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

/** Get one workout
 * @param workoutId id of workout received from params
 *
 */
const getOneWorkout = (workoutId: string) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

/** Create an new workout from payload inserting dynamic uuid, createdAt and updatedAt dates */
const createNewWorkout = (newWorkout: WorkoutProps) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

/** Update one workout */
const updateOneWorkout = (
  workoutId: string,
  changes: Omit<WorkoutProps, "id" | "createdAt" | "updatedAt">
) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

/** Delete one workout */
const deleteOneWorkout = (workoutId: string) => {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
