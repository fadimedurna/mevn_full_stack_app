const express = require("express");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer"); //multer middleware for handling file uploads

// Multer configuration/middleware
let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/"); // "uploads" directory for storing files
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname); // generate unique filename with timestamp
  },
});

// Define a middleware function to upload files
let upload = multer({
    storage: storage,
  }).single("image"); 

// Routes
router.get("/", API.fetchAllPosts);
router.get("/:id", API.fetchPostByID);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
