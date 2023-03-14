import blogPostRepository from "../repositories/blogPost.repository.js";

async function createBlogPost(post) {
  await blogPostRepository.createBlogPost(post);
}

async function getBlogPosts() {
  return await blogPostRepository.getBlogPosts();
}

async function createComentario(comentario, _id) {
  await blogPostRepository.createComentario(comentario, _id);
}

export default {
  createBlogPost,
  getBlogPosts,
  createComentario,
};
