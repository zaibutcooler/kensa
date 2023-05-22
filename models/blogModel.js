const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Writer" },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
