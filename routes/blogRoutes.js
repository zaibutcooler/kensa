const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.use(express.json());

router.get("/all", blogController.getAllBlogs);

router.get("/:id", blogController.getBlogById);

router.post("/add", blogController.createBlog);

router.delete("/delete/:id", blogController.deleteBlogById);

router.patch("/update/:id", blogController.updateBlogById);

module.exports = router;
