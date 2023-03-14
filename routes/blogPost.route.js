import express from "express";
import blogPostController from "../controllers/blogPost.controller.js";

const router = express.Router();

router.post("/", blogPostController.createBlogPost);
router.get("/", blogPostController.getBlogPosts);
router.post("/comentario", blogPostController.createComentario);

export default router;
