const mongoose = require("mongoose");
const writerSchema = new mongoose.Schema({
  name: { type: String },
  bio: { type: String },
  age: { type: Number },
  country: { type: String },
  salary: { type: Number },
});

module.exports = mongoose.model("Writer", writerSchema);
