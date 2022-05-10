import fs from "fs";

export const saveToDatabase = (DB: any) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};
