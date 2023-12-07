import { getSellsPerDays } from "../services/getSells.js";

const getSellsPerDayFromDb = async (req, res) => {
  try {
    const days = req.body.days;
    console.log(days);
    const response = await getSellsPerDays(days);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getSellsPerDayFromDb;
