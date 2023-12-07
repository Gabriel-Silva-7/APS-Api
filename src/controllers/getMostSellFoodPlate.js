import { getMostSellFoodPlateFromDB } from "../services/getMostSellFoodPlate.js";

const getMostSellFoodPlate = async (req, res) => {
  try {
    const response = await getMostSellFoodPlateFromDB();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getMostSellFoodPlate;
