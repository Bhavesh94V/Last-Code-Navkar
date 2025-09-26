// // backend/server.js
// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');


// // Import routes
// const queryRoutes = require('./routes/queryRoutes');
// const contactRoutes = require('./routes/contactRoutes');

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for all origins (adjust for production)
// app.use(express.json()); // Body parser for JSON data
// app.use(express.urlencoded({ extended: true })); // Body parser for URL-encoded data

// // Mount routes
// app.use('/api/query', queryRoutes);
// app.use('/api/contact', contactRoutes);

// // Basic route for testing
// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

// // Error handling middleware (optional, but good practice)
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
// backend/server.js
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config() // Load environment variables from .env file

// Import routes
const queryRoutes = require("./routes/queryRoutes")
const contactRoutes = require("./routes/contactRoutes")
const careerRoutes = require("./routes/careerRoutes") // Mount career routes

// Connect to MongoDB
connectDB()

const app = express()

// Middleware
// app.use(cors()) 
// Middleware
const allowedOrigins = [
    "http://localhost:8080",
    "https://navkarbhavsarandco.com",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        credentials: true,
    })
);

app.use(express.json()) // Body parser for JSON data
app.use(express.urlencoded({ extended: true })) // Body parser for URL-encoded data

// Mount routes
app.use("/api/query", queryRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/career", careerRoutes) // add /api/career

// Basic route for testing
app.get("/", (req, res) => {
    res.send("API is running...")
})

// Error handling middleware (optional, but good practice)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
