import azureDB from "../connections/azure.js";

export const getMostSellFoodsFromDB = async (days) => {
  try {
    const response = await azureDB.query(
      `WITH VendasPorPrato AS (
        SELECT
            v.ID_Prato,
            SUM(Qtd_Unidades) AS TotalUnidadesVendidas,
            COUNT(v.ID_Venda) AS TotalVendas,
            c.Nome_Prato
        FROM
            Vendas v
            JOIN Cardapio c ON c.ID_Prato = v.ID_Prato
        WHERE
            Data_Venda BETWEEN DATEADD(DAY, ${days}, GETDATE()) AND GETDATE()
        GROUP BY
            v.ID_Prato, c.Nome_Prato
    )
    SELECT TOP 10
        ID_Prato,
        Nome_Prato,
        TotalVendas,
        TotalUnidadesVendidas AS UnidadesUltimos7Dias
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
