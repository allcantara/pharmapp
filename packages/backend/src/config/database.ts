import { SequelizeOptions } from "sequelize-typescript";

const databaseConfig = <SequelizeOptions> {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'freela',
  password: '210901',
  database: 'pharmapp_desenv',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}

export { databaseConfig }
