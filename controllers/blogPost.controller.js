import blogPostService from "../services/blogPost.service.js";

async function createBlogPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error("Título e conteúdo são obrigatórios.");
    }
    post = await blogPostService.createBlogPost(post);
    res.send(post);
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getBlogPosts(req, res, next) {
  try {
    res.send(await blogPostService.getBlogPosts());
    logger.info("GET /post");
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  try {
    let params = req.body;
    if (!params._id || !params.comentario) {
      throw new Error("Blog ID e comentário são obrigatórios.");
    }
    await blogPostService.createComentario(params.comentario, params._id);
    logger.info(`POST /comentario`);
    res.end();
  } catch (err) {
    next(err);
  }
}

export default {
  createBlogPost,
  getBlogPosts,
  createComentario,
};
