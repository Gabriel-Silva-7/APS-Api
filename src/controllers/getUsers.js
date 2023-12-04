import getUsers from "../services/getUsers.js";

const getAllUsers = async (req, res) => {
  try {
    const response = await getUsers();
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("failed to register new user", error);
  }
};

export default getAllUsers;
