import getSell from "../services/getTotalSellByFilial.js";

const getTotalSellByFilial = async (req, res) => {
  try {
    const responsegetTotalSell = await getSell.getTotalSell();
    const responsegetTotalSellByFilial = await getSell.gettotalsellbyfilial();

    res
      .status(200)
      .send({ responsegetTotalSell, responsegetTotalSellByFilial });
  } catch (error) {
    res.status(500).send("Failed to get sells", error);
  }
};

export default getTotalSellByFilial;
