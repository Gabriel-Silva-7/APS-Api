import getTotalSellByFilial from "../controllers/gelTotalSellByFilial.js";
import getNewClientsFromDB from "../controllers/getNewClients.js";
import getSellsFromDb from "../controllers/getSell.js";
import getSellsPerDayFromDb from "../controllers/getSellPerDay.js";
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
};

export default Routes;
