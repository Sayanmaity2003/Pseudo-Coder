import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service
  auth: {
    user: process.env.ADMIN_EMAIL, // your email
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to MediVerse!",
    text: `Hi ${name},\n\nWelcome to MediVerse!\n\nWe're delighted to have you on board. MediVerse is your one-stop destination for booking hassle-free doctor appointments from the comfort of your home.\n\nTo get started, log in to your account, explore our list of trusted doctors across various specialties, and schedule your first consultation in just a few clicks.\n\nIf you ever need help or have questions, our support team is always ready to assist you.\n\nThank you for choosing MediVerse – your health, our priority.\n\nBest regards,\nThe MediVerse Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully");
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

const sendPaymentSuccessEmail = async (
  email,
  name,
  doctor,
  slotDate,
  slotTime
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Appointment Payment was Successful",
    html: `
      <h3>Hello ${name},</h3>
      <p>Your payment has been <strong>successfully received</strong> for your appointment.</p>
      <h4>Appointment Details:</h4>
      <ul>
        <li><strong>Doctor:</strong> Dr. ${doctor}</li>
        <li><strong>Date:</strong> ${slotDate}</li>
        <li><strong>Time:</strong> ${slotTime}</li>
      </ul>
      <p>We look forward to serving you. Thank you for choosing us!</p>
      <br />
      <p>Best Regards,<br/>The MediVerse Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Payment success email sent successfully");
  } catch (error) {
    console.error("Error sending payment success email:", error);
  }
};

const sendCancellationEmail = async (
  email,
  name,
  doctor,
  slotDate,
  slotTime
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Appointment Has Been Cancelled",
    html: `
        <h3>Hi ${name},</h3>
        <p>We wanted to let you know that your appointment has been <strong>cancelled</strong>.</p>
        <h4>Cancelled Appointment Details:</h4>
        <ul>
          <li><strong>Doctor:</strong> Dr. ${doctor}</li>
          <li><strong>Date:</strong> ${slotDate}</li>
          <li><strong>Time:</strong> ${slotTime}</li>
        </ul>
        <p>If this was a mistake or you wish to rebook, you can visit your dashboard to schedule a new appointment.</p>
        <br />
        <p>Take care,<br/>The MediVerse Team</p>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Cancellation email sent successfully");
  } catch (error) {
    console.error("Error sending cancellation email:", error);
  }
};

export { sendWelcomeEmail, sendPaymentSuccessEmail, sendCancellationEmail };
