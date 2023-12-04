import azureDB from "../connections/azure.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const user = req.body;
  try {
    const query = await azureDB.query(
      `SELECT * from Usuarios where Email_Usuario = '${req.body.email}'`
    );
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      query[0][0].Hash_Usuario
    );
    if (isPasswordCorrect) {
      const token = await jwt.sign(
        {
          userId: query[0][0].ID_Usuario,
          email: user.email,
          nome: query[0][0].Nome_Usuario,
        },
        JWT_SECRET,
        { expiresIn: user.remeberLogin ? "8h" : "1hr" }
      );
      res.send({ token: token });
    } else {
      res.status(401).send({ error: "Senha incorreta" });
    }
  } catch (e) {}
};

export default login;
