const express = require("express");
const router = express.Router();
const writerController = require("../controller/writerController");

router.use(express.json());

router.get("/all", writerController.getAllWriter);

router.get("/:id", writerController.getWriterById);

router.post("/add", writerController.createWriter);

router.delete("/delete/:id", writerController.deleteWriterById);

router.patch("/update/:id", writerController.updateWriterById);

module.exports = router;
