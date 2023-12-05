import azureDB from "../connections/azure.js";

const getUsers = async (days) => {
  try {
    const response = await azureDB.query(
      `SELECT SUM(Valor) as ValorTotalDia, Data_Venda FROM Vendas WHERE Data_Venda >= DATEADD(day, ${days}, GETDATE()) GROUP BY Data_Venda ORDER BY Data_Venda `
    );
    return response[0];
  } catch (e) {
    throw new Error("Failed to get sells", e);
  }
};

export default getUsers;
