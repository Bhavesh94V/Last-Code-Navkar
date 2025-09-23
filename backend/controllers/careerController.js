const Career = require("../models/Career")
const sendEmail = require("../config/mailer")

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
        } = req.body

        // Basic validation
        if (!firstName || !lastName || !email || !mobileNo || !gender || !dateOfBirth) {
            return res.status(400).json({ success: false, message: "Missing required fields" })
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" })
        }

        // Resume file (from multer)
        const resumeFile = req.file || null

        // Save to database (store only resume metadata)
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
        })

        await career.save()

        // Build email
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
    `

        const attachments = resumeFile
            ? [
                {
                    filename: resumeFile.originalname,
                    content: resumeFile.buffer,
                    contentType: resumeFile.mimetype,
                },
            ]
            : undefined

        await sendEmail({
            to: process.env.EMAIL_USER,
            subject: `New Career Application - ${firstName} ${lastName}`,
            html: emailHtml,
            attachments,
        })

        return res.status(200).json({ success: true, message: "Application submitted successfully" })
    } catch (error) {
        console.error("Career submission error:", error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}
