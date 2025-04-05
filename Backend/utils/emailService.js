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
    subject: "Welcome to Tomato!",
    text: `Hi ${name},\n\nWelcome to Tomato!\n\nWe're thrilled to have you join our community of food lovers. With just a few clicks, you can explore a wide variety of delicious meals.\n\nTo get started, simply log in to your account, browse our menu, and place your first order! If you have any questions or need assistance, our support team is always here to help.\n\nThank you for choosing us!\n\nBest regards,\nThe Tomato Team`,
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
      <p>Best Regards,<br/>The FOREVER Healthcare Team</p>
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
        <p>Take care,<br/>The FOREVER Healthcare Team</p>
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
