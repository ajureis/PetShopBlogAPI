import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://msqrzmjr:9qNy-_-2P5jaqlmDTl7_R_rYgqJNJgc4@isilo.db.elephantsql.com/msqrzmjr",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
