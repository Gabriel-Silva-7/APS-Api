import getTotalSellByFilial from "../controllers/gelTotalSellByFilial.js";
import getMostSellFoodPlate from "../controllers/getMostSellFoodPlate.js";
import getMostSellFoods from "../controllers/getMostSellFoods.js";
import getNewClientsFromDB from "../controllers/getNewClients.js";
import getSellsFromDb from "../controllers/getSell.js";
import getSellsPerDayFromDb from "../controllers/getSellPerDay.js";
import getSellsQuantityBetweenWeeksFromDB from "../controllers/getSellsQuantityBetweenWeeks.js";
import getAllUsers from "../controllers/getUsers.js";
import RegisterNewUser from "../controllers/register.js";
import login from "../services/login.js";

const Routes = async (fastify, options) => {
  fastify.post("/register", RegisterNewUser);
  fastify.get("/getusers", getAllUsers);
  fastify.post("/login", login);
  fastify.post("/getsells", getSellsFromDb);
  fastify.post("/getnewclients", getNewClientsFromDB);
  fastify.post("/gettotalsellbyfilial", getTotalSellByFilial);
  fastify.post("/getsellsperday", getSellsPerDayFromDb);
  fastify.post(
    "/getsellsquantitybetweenweeks",
    getSellsQuantityBetweenWeeksFromDB
  );
  fastify.post("/getmostsellfoodplate", getMostSellFoodPlate);
  fastify.post("/getMostSellFoods", getMostSellFoods);
};

export default Routes;
