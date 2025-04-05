import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/send-verification-email", upload.single("document"), async (req, res) => {
  const { name, email, password, experience, fees, about, speciality, degree, address1, address2 } = req.body;
  const document = req.file;

  if (!document) {
    return res.status(400).json({ success: false, message: "Document is required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Doctor Verification Request",
      html: `<h3>Doctor Verification Details</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Speciality:</strong> ${speciality}</p>
             <p><strong>Degree:</strong> ${degree}</p>
             <p><strong>Experience:</strong> ${experience}</p>
             <p><strong>Fees:</strong> ${fees}</p>
             <p><strong>Address 1:</strong> ${address1}</p>
             <p><strong>Address 2:</strong> ${address2}</p>
             <p><strong>About:</strong> ${about}</p>
             <p><strong>Password:</strong> ${password} (For verification only)</p>`,
      attachments: [
        {
          filename: document.originalname,
          content: document.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Verification email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending verification email." });
  }
});

export default router;
