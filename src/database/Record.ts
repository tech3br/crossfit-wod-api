import DB from "./db.json";

const getRecordForWorkout = (workoutId: string) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);

    if (record.length <= 0) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    return record;
  } catch (error: any) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

export default { getRecordForWorkout };
