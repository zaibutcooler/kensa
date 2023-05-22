const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String },
  author: { type: String },
});

module.exports = mongoose.model("Blog", blogSchema);
