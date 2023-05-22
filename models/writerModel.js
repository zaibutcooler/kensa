const mongoose = require("mongoose");
const writerSchema = new mongoose.Schema({
  name: { type: String },
  bio: { type: String },
  age: { type: Number },
  country: { type: String },
  salary: { type: Number },
  socialMedia: {
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Writer", writerSchema);
