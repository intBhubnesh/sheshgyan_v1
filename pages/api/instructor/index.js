import Instructor from "database/models/partner";
import initDB from "@/utils/db";

initDB();

export default async (req, res) => {
  try {
    const instructors = await Instructor.find().populate("partner_id"); // Fetch all instructors and populate partner details
    res.status(200).json({ instructors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching instructors" });
  }
};
