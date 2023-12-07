import azureDB from "../connections/azure.js";

export const getMostSellFoodPlateFromDB = async (days) => {
  try {
    const response = await azureDB.query(
      `WITH VendasPorPrato AS (
        SELECT
            v.ID_Prato,
            SUM(Qtd_Unidades) AS TotalUnidadesVendidas,
        c.Nome_Prato
        FROM
            Vendas v
        join Cardapio c on c.ID_Prato =  v.ID_Prato
        WHERE
            Data_Venda BETWEEN DATEADD(DAY, -7, GETDATE()) AND GETDATE()
        GROUP BY
            v.ID_Prato, c.Nome_Prato
    )
    SELECT TOP 1
        ID_Prato,
        TotalUnidadesVendidas AS UnidadesUltimos7Dias,
      Nome_Prato,
        LAG(TotalUnidadesVendidas, 1, 0) OVER (ORDER BY TotalUnidadesVendidas DESC) AS UnidadesSemanaAnterior,
        CASE
            WHEN LAG(TotalUnidadesVendidas, 1, 0) OVER (ORDER BY TotalUnidadesVendidas DESC) = 0 THEN 100
            ELSE ((TotalUnidadesVendidas - LAG(TotalUnidadesVendidas, 1, 0) OVER (ORDER BY TotalUnidadesVendidas DESC)) / LAG(TotalUnidadesVendidas, 1, 0) OVER (ORDER BY TotalUnidadesVendidas DESC)) * 100
        END AS PercentualVariacao
    FROM
        VendasPorPrato
    ORDER BY
        TotalUnidadesVendidas DESC;
    
  
   `
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};
