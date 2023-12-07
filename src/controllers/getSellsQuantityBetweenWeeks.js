import { getSellsQuantityBetweenWeeks } from "../services/getQuantitySellsBetweenWeeks.js";

const getSellsQuantityBetweenWeeksFromDB = async (req, res) => {
  try {
    const response = await getSellsQuantityBetweenWeeks();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getSellsQuantityBetweenWeeksFromDB;
