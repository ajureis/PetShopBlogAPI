import Sequelize from "sequelize";
import db from "../repositories/db.js";

const BlogPost = db.define(
  "posts",
  {
    _id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    conteudo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default BlogPost;
