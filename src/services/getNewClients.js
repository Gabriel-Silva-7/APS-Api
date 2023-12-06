import azureDB from "../connections/azure.js";

const getNewClients = async (days) => {
  console.log(days);
  try {
    const response = await azureDB.query(
      `WITH NovosClientesNosUltimosxDias AS (
        SELECT COUNT(ID_Cliente) AS NumNovosClientes
        FROM Clientes
        WHERE CreatedAt >= DATEADD(day, ${days}, GETDATE())
    )
    
    SELECT
        COUNT(ID_Cliente) AS TotalClientes,
        (SELECT NumNovosClientes FROM NovosClientesNosUltimosxDias) AS NovosClientes,
        (SELECT NumNovosClientes FROM NovosClientesNosUltimosxDias) / CAST(COUNT(ID_Cliente) AS FLOAT) * 100 AS PercentualAumento
    FROM Clientes; `
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};

export default getNewClients;
