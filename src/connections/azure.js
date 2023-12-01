import Sequelize from "sequelize";
import "dotenv/config";

const {
  AZURE_DB_HOST,
  AZURE_DB_LOGIN,
  AZURE_DB_PASSWORD,
  AZURE_DB_DIALECT,
  AZURE_DB_NAME,
} = process.env;

const azureDB = new Sequelize(
  AZURE_DB_NAME,
  AZURE_DB_LOGIN,
  AZURE_DB_PASSWORD,
  {
    host: AZURE_DB_HOST,
    dialect: AZURE_DB_DIALECT,
    logging: console.log,
    dialectOptions: {
      options: {
        requestTimeout: 300000,
      },
    },
  }
);

export default azureDB;
