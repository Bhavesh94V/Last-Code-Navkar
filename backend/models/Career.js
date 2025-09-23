const mongoose = require("mongoose")

const careerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    position: { type: String },
    dateOfBirth: { type: String, required: true }, // keeping as string (DD/MM/YYYY) to match form
    qualification: { type: String },
    portfolio: { type: String },
    lastCompany: { type: String },
    experienceYear: { type: String },
    experienceMonth: { type: String },
    reference: { type: String },

    // resume file (we store metadata only; file is emailed via attachment)
    resume: {
        originalName: { type: String },
        mimeType: { type: String },
        size: { type: Number },
    },

    submittedAt: { type: Date, default: Date.now },
})

const Career = mongoose.model("Career", careerSchema)
module.exports = Career
