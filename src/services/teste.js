import azureDB from "../connections/azure.js";

const teste = () => {
  try {
    const query = azureDB.query("SELECT * from Clientes");
    return query;
  } catch (e) {}
};

export default teste;
