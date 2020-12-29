import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../config/database";
import { UserEntity } from "../entities/UserEntity";

const sequelize = new Sequelize(databaseConfig);

sequelize.addModels([ UserEntity])

export { sequelize };
