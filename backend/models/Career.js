// backend/models/Career.js
const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    position: { type: String },
    dateOfBirth: { type: String, required: true }, // Storing as string for DD/MM/YYYY format
    qualification: { type: String },
    portfolio: { type: String },
    resume: { type: String, required: true }, // Storing filename
    lastCompany: { type: String },
    experienceYear: { type: String },
    experienceMonth: { type: String },
    reference: { type: String },
    submittedAt: { type: Date, default: Date.now },
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;