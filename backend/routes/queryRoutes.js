// backend/routes/queryRoutes.js
const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/', queryController.submitQuery);

module.exports = router;
