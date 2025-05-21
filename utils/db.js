import connection from "../database/connection";

const initDB = async () => {
  try {
    await connection.authenticate();
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default initDB;