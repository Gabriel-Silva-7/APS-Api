import getAllUsers from "../controllers/getUsers.js";
import RegisterNewUser from "../controllers/register.js";
import login from "../services/login.js";

const Routes = async (fastify, options) => {
  fastify.post("/register", RegisterNewUser);
  fastify.get("/getusers", getAllUsers);
  fastify.post("/login", login);
};

export default Routes;
