import azureDB from "../connections/azure.js";

const getTotalSell = async () => {
  try {
    const response = await azureDB.query(
      ` SELECT *
      FROM TotalDeVendasFiliais
      WHERE ValorFilial = (SELECT MAX(ValorFilial) FROM TotalDeVendasFiliais)`
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};

const gettotalsellbyfilial = async () => {
  try {
    const response = await azureDB.query(
      ` SELECT *
      FROM TotalDeVendasFiliais`
    );
    return response[0];
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get sells", e);
  }
};

export default { getTotalSell, gettotalsellbyfilial };
