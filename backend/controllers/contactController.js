// backend/controllers/contactController.js
const Contact = require('../models/Contact');
const sendEmail = require('../config/mailer');

exports.submitContact = async (req, res) => {
    try {
        const { name, email, phone, message, ...otherFields } = req.body;

        // 1. Validate incoming request data
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // 2. Insert data into MongoDB
        const newContact = new Contact({
            name, email, phone, message, ...otherFields
        });
        await newContact.save();

        // 3. Send email
        const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${otherFields.company || 'N/A'}</p>
      <p><strong>Service Required:</strong> ${otherFields.service || 'N/A'}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Contact from ${name}`,
            html: emailHtml,
        });

        // 4. Return success response
        res.status(200).json({ success: true, message: 'Form submitted successfully' });

    } catch (error) {
        console.error('Contact form submission error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};