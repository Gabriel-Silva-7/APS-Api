import { getMostSellFoodsFromDB } from "../services/getMostSellFoods.js";

const getMostSellFoods = async (req, res) => {
  try {
    const days = req.body.days;
    const response = await getMostSellFoodsFromDB(days);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to get sells", error);
  }
};

export default getMostSellFoods;
