// backend/routes/careerRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const careerController = require('../controllers/careerController');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads/'); // Store files in the 'uploads' directory within backend
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB file size limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Error: Only PDF, DOC, and DOCX files are allowed!');
        }
    },
});

router.post('/', upload.single('resume'), careerController.submitCareer);

module.exports = router;