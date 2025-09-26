const Career = require("../models/Career")
const sendEmail = require("../config/mailer")
const { google } = require("googleapis")
const addToSheet = require("../utils/googleSheet");

// ====== Google Sheets Setup ======
const credentials = {
    type: "service_account",
    project_id: "navkar-bhavsar",
    private_key_id: "5df4b5fb9cad6ae5334c9593b6e371f1eac1ead2",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD3z1WX11rhcVUU\np2BBhc2Pb0plVT+ddHeplj5MYiQ6RMI3pDEjJRGnOJVOmjtSwwED7I1IOkLB5IaN\nVNR0V88SOcOs8di/6Udm5ynK+I6z9HpswNIKQ2ZvEf/+o5xMgARb3chqZzNqXSTE\nmEXGIT7CxrwzTfQ+u/Dm0L1ti1/zTXE8fKl4b2B2e3Iu5V6xqufF+S4kM9uEajJP\n2CfL4nW4DO09jPmw/Kh0mDfB7m/geS+lkkdwISZpyImGRTQJtC2qpsNPE7HMzGVH\nNj7QwXq7ZfNV3L2QR9tgFZXqbfwLlGFhwJ4rXJBptZnPZZL68mTWciXNq/k8yuE5\nBKjWG5d3AgMBAAECggEASvZ0TP9/ZW00MJBFROzl9vrShX7ZRJdDz5A8fjy9+sZr\n/gr0Nk5zXaN3PxTW1z1YJEi9oFjHcwHfVgeQUTVy1W+V6s4qJDu8Nru838J64KMX\nGajmoOYsqXLHfs8da+LZ7rRTeSSI4CcXBUWO7dWGt8MIkXiGZyfRQvFoLCgaOW3e\navWV3Bzi5iDGNOzH3xEkUXWaq+AdHxm4EAkqmjVEDHkM7Diw01h7GPayWhiLE6KU\nMbw/qyZrBqUDlgoimse9zGlcL5tFiZIPZEwCrk/4FGyW+vTzmm5WSrTRrsxzUw3A\n6y1NjqcYCUeFpwZ7kcA+CVy9mpiXZ2C68v55bGrcSQKBgQD+4ktFtZWYKfh9KVlN\nLx4vRyv5wiyvN/lhnj+MI5SLe4t3gHXlPZ+xgXvS/sQCpzNmNB55hSBkbaMyTp7/\ni0o8rJ4Ly4p+guJZrc68XxCPMOt6eOuzxl+Kq5QM5fI9ly/fKDlQ/dcKYjtTwxqW\nMzwuuj7m8xjKTDoRpNIalXNKNQKBgQD45Rxeo3m1qk2E0xikTok3Xt5nLSo+qHk+\nywTS1G4Da4iVMPAEeg+ff0VqAfnR52vvHoT5Mnmo6Dh5ihbgHxXvVmVE+d1aOTJ2\nOubiMJNON4eWJITly5ZBvQbye5qeCVsYcUIUEHIvFMvvrcs+lOochY9knrUyOFJI\nLUaG1DkwewKBgQC52PMdrxuWyfOf/4hX2SVfP7v27vh6AoxZ+3NGkaL8WWcGCart\nLhPE8C8DWDQ/4v59ZT9bSBCoabD3O5B/sGa++vZ6jz06peC5lxwJCiAe6IKq2IS0\nns6HZDgdd4U8F4MWalPwlEY6EgpENxyprE4TnEXFTDglOZOVzeJM8/AOiQKBgB+m\nkvr98uZFJ+JyLboHOq/N4p5gQfUB25k+m/hrhynsLMw8Eume1AnGV39pjOlCcplP\n2j0OTCZMkZHzG4GYsmNjKzGgTKPCjkY2q1GsN69EpHtVXYkTYKIvdYi0ay8ZpXnw\nPSTsCnkuPdjW0ve8XCEQYvG6tPQT8XK4PzW6GyOtAoGBAJFJmwenCzH5cPBgps/K\n0BXnint2vDoHIRsLIAPKiPCMlE19nJIfKLY+4RnW47Tns/YjLUA4srer73kqugYL\nVokomHlNQNuET9YNw0nTC7qie4bDnHfW2NgjbGAkvHwmhU8SxJuwWLHAWxrEOEOa\n7oFwoc64mVVsEoEX84TxCp5n\n-----END PRIVATE KEY-----\n",
    client_email: "sheet-writer@navkar-bhavsar.iam.gserviceaccount.com",
    client_id: "110101989644963991300",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/sheet-writer@navkar-bhavsar.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// 🔹 Google Sheet ID
const SPREADSHEET_ID = "1MLcME9uDai1O1h0N7cAV8lLxdNEyaAHWJJMmtJYIBnA"

// Helper: append data to Career tab
// async function addToSheet(data) {
//     try {
//         await sheets.spreadsheets.values.append({
//             spreadsheetId: SPREADSHEET_ID,
//             range: "Career!A1", // Career tab
//             valueInputOption: "USER_ENTERED",
//             requestBody: { values: [data] },
//         });
//         console.log("✅ Career data added to Google Sheet")
//     } catch (err) {
//         console.error("❌ Google Sheet error:", err)
//     }
// }

// ====== Main Controller ======
// exports.submitCareer = async (req, res) => {
//     try {
//         const {
//             firstName,
//             lastName,
//             email,
//             mobileNo,
//             gender,
//             position,
//             dateOfBirth,
//             qualification,
//             portfolio,
//             lastCompany,
//             experienceYear,
//             experienceMonth,
//             reference,
//         } = req.body

//         // Basic validation
//         if (!firstName || !lastName || !email || !mobileNo || !gender || !dateOfBirth) {
//             return res.status(400).json({ success: false, message: "Missing required fields" })
//         }
//         if (!/\S+@\S+\.\S+/.test(email)) {
//             return res.status(400).json({ success: false, message: "Invalid email format" })
//         }

//         const resumeFile = req.file || null

//         // Save to MongoDB
//         const career = new Career({
//             firstName,
//             lastName,
//             email,
//             mobileNo,
//             gender,
//             position,
//             dateOfBirth,
//             qualification,
//             portfolio,
//             lastCompany,
//             experienceYear,
//             experienceMonth,
//             reference,
//             resume: resumeFile
//                 ? {
//                     originalName: resumeFile.originalname,
//                     mimeType: resumeFile.mimetype,
//                     size: resumeFile.size,
//                 }
//                 : undefined,
//         })
//         await career.save()

//         // Send email
//         const emailHtml = `
//       <h1>New Career Application</h1>
//       <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Mobile:</strong> ${mobileNo}</p>
//       <p><strong>Gender:</strong> ${gender}</p>
//       <p><strong>Position:</strong> ${position || "N/A"}</p>
//       <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
//       <p><strong>Qualification:</strong> ${qualification || "N/A"}</p>
//       <p><strong>Portfolio:</strong> ${portfolio || "N/A"}</p>
//       <p><strong>Last Company:</strong> ${lastCompany || "N/A"}</p>
//       <p><strong>Experience:</strong> ${experienceYear || "0"} years ${experienceMonth || "0"} months</p>
//       <p><strong>Reference/Comments:</strong> ${reference || "N/A"}</p>
//       <p>Submitted on: ${new Date().toLocaleString()}</p>
//     `

//         const attachments = resumeFile
//             ? [{
//                 filename: resumeFile.originalname,
//                 content: resumeFile.buffer,
//                 contentType: resumeFile.mimetype,
//             }]
//             : undefined

//         await sendEmail({
//             to: process.env.EMAIL_USER,
//             subject: `New Career Application - ${firstName} ${lastName}`,
//             html: emailHtml,
//             attachments,
//         })

//         // Add to Google Sheet
//         await addToSheet([
//             firstName,
//             lastName,
//             email,
//             mobileNo,
//             gender,
//             position || "N/A",
//             dateOfBirth,
//             qualification || "N/A",
//             portfolio || "N/A",
//             lastCompany || "N/A",
//             experienceYear || "0",
//             experienceMonth || "0",
//             reference || "N/A",
//             new Date().toLocaleString()
//         ])

//         return res.status(200).json({ success: true, message: "Application submitted successfully" })
//     } catch (error) {
//         console.error("Career submission error:", error)
//         return res.status(500).json({ success: false, message: "Internal server error" })
//     }
// }

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
            reference,
        } = req.body;

        if (!firstName || !lastName || !email || !mobileNo || !gender || !dateOfBirth) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const resumeFile = req.file || null;

        const career = new Career({
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
            reference,
            resume: resumeFile
                ? {
                    originalName: resumeFile.originalname,
                    mimeType: resumeFile.mimetype,
                    size: resumeFile.size,
                }
                : undefined,
        });
        await career.save();

        const emailHtml = `
      <h1>New Career Application</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobileNo}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Position:</strong> ${position || "N/A"}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Qualification:</strong> ${qualification || "N/A"}</p>
      <p><strong>Portfolio:</strong> ${portfolio || "N/A"}</p>
      <p><strong>Last Company:</strong> ${lastCompany || "N/A"}</p>
      <p><strong>Experience:</strong> ${experienceYear || "0"} years ${experienceMonth || "0"} months</p>
      <p><strong>Reference/Comments:</strong> ${reference || "N/A"}</p>
      <p>Submitted on: ${new Date().toLocaleString()}</p>
    `;

        const attachments = resumeFile
            ? [
                {
                    filename: resumeFile.originalname,
                    content: resumeFile.buffer,
                    contentType: resumeFile.mimetype,
                },
            ]
            : undefined;

        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Career Application - ${firstName} ${lastName}`,
            html: emailHtml,
            attachments,
        });

        // ✅ Add to Google Sheet (Career tab)
        await addToSheet("Career", [
            firstName,
            lastName,
            email,
            mobileNo,
            gender,
            position || "N/A",
            dateOfBirth,
            qualification || "N/A",
            portfolio || "N/A",
            lastCompany || "N/A",
            experienceYear || "0",
            experienceMonth || "0",
            reference || "N/A",
            new Date().toLocaleString(),
        ]);

        return res.status(200).json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        console.error("Career submission error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
