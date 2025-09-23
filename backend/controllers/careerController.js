// backend/controllers/careerController.js
const Career = require('../models/Career');
const sendEmail = require('../config/mailer');
const fs = require('fs');
const path = require('path');

exports.submitCareer = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position,
            dateOfBirth,
            qualification,
            portfolio,
            lastCompany,
            experienceYear,
            experienceMonth,
            reference
        } = req.body;

        // 1. Validate incoming request data
        if (!firstName || !lastName || !email || !mobileNo || !gender || !dateOfBirth) {
            // Clean up uploaded file if validation fails
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ success: false, message: 'Missing required text fields' });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Resume file is required' });
        }

        const resumeFileName = req.file.filename;

        // 2. Insert data into MongoDB
        const newCareer = new Career({
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position,
            dateOfBirth,
            qualification,
            portfolio,
            resume: resumeFileName, // Store filename
            lastCompany,
            experienceYear,
            experienceMonth,
            reference,
        });
        await newCareer.save();

        // 3. Send email
        const emailHtml = `
      <h1>New Career Application</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile No:</strong> ${mobileNo}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Position Applied For:</strong> ${position || 'N/A'}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Highest Qualification:</strong> ${qualification || 'N/A'}</p>
      <p><strong>Portfolio Website:</strong> ${portfolio || 'N/A'}</p>
      <p><strong>Last Company:</strong> ${lastCompany || 'N/A'}</p>
      <p><strong>Experience:</strong> ${experienceYear || '0'} Years, ${experienceMonth || '0'} Months</p>
      <p><strong>Reference/Comments:</strong> ${reference || 'N/A'}</p>
      <p><strong>Resume:</strong> ${resumeFileName}</p>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

        const attachments = [{
            filename: resumeFileName,
            path: req.file.path, // Attach the temporarily stored file
            contentType: req.file.mimetype,
        }];

        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Career Application: ${firstName} ${lastName} for ${position || 'Unspecified Position'}`,
            html: emailHtml,
            attachments,
        });

        // 4. Clean up the uploaded file after sending email
        fs.unlink(req.file.path, (err) => {
            if (err) console.error('Error deleting temporary resume file:', err);
        });

        // 5. Return success response
        res.status(200).json({ success: true, message: 'Form submitted successfully' });

    } catch (error) {
        console.error('Career form submission error:', error);
        // Ensure file is deleted even on other errors
        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error('Error deleting temporary resume file on error:', err);
            });
        }
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};