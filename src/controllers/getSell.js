import getSell from "../services/getSells.js";

const getSellsFromDb = async (req, res) => {
  try {
    const response = await getSell();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("failed to register new user", error);
  }
};

export default getSellsFromDb;
