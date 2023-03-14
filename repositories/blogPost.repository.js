import BlogPostSchema from "../schemas/blogPost.schema.js";
import { connect } from "./mongo.db.js";

async function createBlogPost(post) {
  try {
    const mongoose = await connect();
    const Post = mongoose.model("posts", BlogPostSchema);
    post = new Post(post);
    await post.save();
  } catch (err) {
    throw err;
  }
}

async function updateBlogPost(post) {
  try {
    const mongoose = await connect();
    const BlogPost = mongoose.model("posts", BlogPostSchema);
    await BlogPost.findOneAndUpdate({ _id: post._id }, post);
  } catch (err) {
    throw err;
  }
}

async function getBlogPosts() {
  try {
    const mongoose = await connect();
    const BlogPost = mongoose.model("posts", BlogPostSchema);
    const query = BlogPost.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getBlogPost(_id) {
  try {
    const mongoose = await connect();
    const BlogPost = mongoose.model("posts", BlogPostSchema);
    const query = BlogPost.findOne({ _id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function createComentario(comentario, _id) {
  try {
    const blogPost = await getBlogPost(_id);
    blogPost.comentarios.push(comentario);
    await updateBlogPost(blogPost);
  } catch (err) {
    throw err;
  }
}

export default {
  createBlogPost,
  updateBlogPost,
  getBlogPosts,
  getBlogPost,
  createComentario,
};
