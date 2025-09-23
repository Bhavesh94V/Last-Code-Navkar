// backend/models/Query.js
const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String },
    organization: { type: String },
    officeAddress: { type: String },
    city: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String },
    mobile: { type: String, required: true },
    updates: { type: String, enum: ['yes', 'no'], default: 'yes' },
    subject: { type: String, required: true },
    query: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;