const Writer = require("../models/writerModel");

const getAllWriters = async (req, res) => {
  try {
    const writers = await Writer.find();
    res.status(200).json(writers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWriterById = async (req, res) => {
  try {
    const id = req.params.id;
    const writer = await Writer.findById(id);
    if (!writer) {
      return res.status(404).json({ message: "Writer not found" });
    }
    res.status(200).json(writer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createWriter = async (req, res) => {
  const { name, bio, age, country, salary, socialMedia } = req.body;
  try {
    const writer = new Writer({
      name,
      bio,
      age,
      country,
      salary,
      socialMedia,
    });
    const newWriter = await writer.save();
    res.status(201).json(newWriter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteWriterById = async (req, res) => {
  try {
    const writer = await Writer.findByIdAndDelete(req.params.id);
    if (!writer) {
      return res.status(404).json({ message: "Writer not found" });
    }
    res.status(200).json(writer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateWriterById = async (req, res) => {
  const { name, bio, age, country, salary, socialMedia } = req.body;

  try {
    const writer = await Writer.findByIdAndUpdate(
      req.params.id,
      { name, bio, age, country, salary, socialMedia },
      { new: true }
    );

    if (!writer) {
      return res.status(404).json({ message: "Writer not found" });
    }

    res.status(200).json(writer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllWriters,
  getWriterById,
  createWriter,
  deleteWriterById,
  updateWriterById,
};
