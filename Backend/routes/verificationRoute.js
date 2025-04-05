import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";
import DoctorRequest from "../models/DoctorRequest.js"; 


dotenv.config();

const verificationRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

verificationRouter.post("/send-verification-email", upload.single("document"), async (req, res) => {
  const { name, email, password, experience, fees, about, speciality, degree, address1, address2 } = req.body;
  const document = req.file;

  if (!document) {
    return res.status(400).json({ success: false, message: "Document is required." });
  }

  try {
    const newRequest = new DoctorRequest({ name, email, speciality });
    await newRequest.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Doctor Verification Request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Doctor Verification Request</h2>
          <p>Dear Admin,</p>
          <p>A new doctor has requested verification. Below are the details:</p>
          
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Speciality:</strong></td><td>${speciality}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Degree:</strong></td><td>${degree}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Experience:</strong></td><td>${experience} years</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Fees:</strong></td><td>Rs${fees}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Address 1:</strong></td><td>${address1}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Address 2:</strong></td><td>${address2}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>About:</strong></td><td>${about}</td></tr>
          </table>
    
          <p>The required document is attached.</p>
          <p>Best Regards,</p>
          <p><strong>Doctor Verification Team</strong></p>
        </div>
      `,
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

export default verificationRouter;
