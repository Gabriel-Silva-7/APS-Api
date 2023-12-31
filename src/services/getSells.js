import azureDB from "../connections/azure.js";

const getsells = async (days) => {
  console.log(Number(days));
  try {
    const response = await azureDB.query(
      `SELECT SUM(Valor) as Vendas, Data_Venda FROM Vendas where Data_Venda <= CAST(GETDATE() AS DATE) 
      AND Data_Venda >= DATEADD(day, ${Number(
        days
      )}, CAST(GETDATE() AS DATE)) GROUP BY Data_Venda ORDER BY Data_Venda `
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};

export const getSellsPerDays = async (days) => {
  try {
    const response = await azureDB.query(
      `SELECT
      Data_Venda,
      COUNT(*) AS Quantidade_Vendas
  FROM
      Vendas
  where Data_Venda <= CAST(GETDATE() AS DATE) 
        AND Data_Venda >= DATEADD(day, ${Number(days)}, CAST(GETDATE() AS DATE))
  GROUP BY
      Data_Venda
  ORDER BY
      Data_Venda;
   `
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};

export default getsells;
