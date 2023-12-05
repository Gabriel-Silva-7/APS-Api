import azureDB from "../connections/azure.js";

const getUsers = async () => {
  try {
    const response = await azureDB.query(
      `SELECT SUM(Valor) as ValorTotalDia FROM Vendas GROUP BY Data_Venda ORDER BY Data_Venda`
    );
    return response[0];
  } catch (e) {
    throw new Error("Failed to get users");
  }
};

export default getUsers;
