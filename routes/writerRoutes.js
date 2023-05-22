const express = require("express");
const router = express.Router();
const Writer = require("../models/writerModel");
router.use(express.json());

router.use(express.json());

router.get("/all", blogController.getAllWriter);

router.get("/:id", blogController.getWriterById);

router.post("/add", blogController.createWriter);

router.delete("/delete/:id", blogController.deleteWriterById);

router.patch("/update/:id", blogController.updateWriterById);

module.exports = router;
