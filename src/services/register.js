import azureDB from "../connections/azure.js";
import bcrypt from "bcrypt";

const register = async (user) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const verifyEmail = await azureDB.query(
      `select * from usuarios where Email_Usuario = '${user.email}'`
    );
    if (verifyEmail[0].length > 1) {
      return "usuário já existe";
    }
    const query = await azureDB.query(
      `insert into usuarios(Nome_Usuario, Email_Usuario, Telefone_Usuario, Hash_Usuario) values('${user.username}', '${user.email}', '${user.phone}', '${hashedPassword}')`
    );

    return "usuário criado com sucesso";
  } catch (e) {
    throw new Error("Não foi possivel criar o usuário", e);
  }
};

export default register;
