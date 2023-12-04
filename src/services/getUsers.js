import azureDB from "../connections/azure.js";

const getUsers = async () => {
  try {
    const response = await azureDB.query(
      `SELECT Nome_Usuario, Email_Usuario, Telefone_Usuario from Usuarios`
    );
    return response[0];
  } catch (e) {
    throw new Error("Failed to get users");
  }
};

export default getUsers;
