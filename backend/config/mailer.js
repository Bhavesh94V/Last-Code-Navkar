// backend/config/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password
    },
    tls: {
        rejectUnauthorized: false, // Allows Render cloud to connect
    },
});


const sendEmail = async ({ to, subject, html, attachments }) => {
    try {
        await transporter.sendMail({
            from: `"Form Submission" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
            attachments,
        });
        console.log('Email sent successfully');
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
};

module.exports = sendEmail;
