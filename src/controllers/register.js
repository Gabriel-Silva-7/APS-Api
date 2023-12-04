import register from "../services/register.js";

const RegisterNewUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await register(user);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("failed to register new user", error);
  }
};

export default RegisterNewUser;
