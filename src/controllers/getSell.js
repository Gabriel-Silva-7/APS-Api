import getSell from "../services/getSells.js";

const getSellsFromDb = async (req, res) => {
  try {
    const days = req.body.days;
    console.log(days);
    const response = await getSell(days);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getSellsFromDb;
