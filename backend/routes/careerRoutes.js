const express = require("express")
const router = express.Router()
const multer = require("multer")
const careerController = require("../controllers/careerController")

// Use memory storage; we email the file without persisting to disk
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 2 * 1024 * 1024 } }) // 2MB

router.post("/", upload.single("resume"), careerController.submitCareer)

module.exports = router
