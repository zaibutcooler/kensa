const Blog = require("../models/blogModel");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author");
    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title, text, author, tags } = req.body;
  try {
    const blog = new Blog({ title, text, author, tags });
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a blog by ID
const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndRemove(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a blog by ID
const updateBlogById = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        tags: req.body.tags,
      },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }
    res.status(201).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  deleteBlogById,
  updateBlogById,
};
