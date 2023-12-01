import teste from "../services/teste.js";

const Routes = async (fastify, options) => {
  fastify.get("/teste", teste);
};

export default Routes;
