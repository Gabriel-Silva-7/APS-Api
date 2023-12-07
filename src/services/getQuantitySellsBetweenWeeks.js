import azureDB from "../connections/azure.js";

export const getSellsQuantityBetweenWeeks = async () => {
  try {
    const response = await azureDB.query(
      `WITH NovasVendasNosUltimos7Dias AS (
        SELECT
            COUNT(*) AS QuantidadeDeVendas
        FROM
            Vendas
        WHERE
            Data_Venda BETWEEN DATEADD(DAY, -7, GETDATE()) AND GETDATE()
    ),
    VendasAnteriores AS (
        SELECT
            COUNT(*) AS QuantidadeDeVendasAnteriores
        FROM
            Vendas
        WHERE
            Data_Venda BETWEEN DATEADD(DAY, -14, GETDATE()) AND DATEADD(DAY, -7, GETDATE())
    )
    
    SELECT
        (SELECT QuantidadeDeVendas FROM NovasVendasNosUltimos7Dias) AS TotalVendasUltimos7Dias,
        (SELECT QuantidadeDeVendasAnteriores FROM VendasAnteriores) AS TotalVendasAnteriores,
        (((SELECT QuantidadeDeVendas FROM NovasVendasNosUltimos7Dias) - (SELECT QuantidadeDeVendasAnteriores FROM VendasAnteriores)) * 100.0) / NULLIF((SELECT QuantidadeDeVendasAnteriores FROM VendasAnteriores), 0) AS PercentualAumento
   `
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};
