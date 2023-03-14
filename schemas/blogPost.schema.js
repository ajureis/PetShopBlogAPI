import mongoose from "mongoose";
import comentarioSchema from "./comentario.schema.js";

const BlogPostSchema = new mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
    comentarios: [comentarioSchema],
  },
  { collection: "posts" }
);

export default BlogPostSchema;
