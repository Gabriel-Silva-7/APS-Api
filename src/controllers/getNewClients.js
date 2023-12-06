import getNewClients from "../services/getNewClients.js";

const getNewClientsFromDB = async (req, res) => {
  try {
    const days = req.body.days;
    const response = await getNewClients(days);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getNewClientsFromDB;
