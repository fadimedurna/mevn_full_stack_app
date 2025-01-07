//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("uploads")); // for serving static files

// connect to MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to the database(mevn_db)!"))
  .catch((err) => console.error(err));

// routes prefix for all routes
app.use("/api/posts", require("./routes/routes"));

//start server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
