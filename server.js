const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/expressone";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const blogRoute = require("./routes/blogRoutes");
app.use("/blogs", blogRoute);

const writerRoute = require("./routes/writerRoutes");
app.use("/writer", writerRoute);

app.listen(5000, () => {
  console.log("it's fucking working");
});
