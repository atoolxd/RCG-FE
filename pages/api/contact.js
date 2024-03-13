// pages/api/contact.js
import nodemailer from 'nodemailer';
import emailConfig from './emailConfig'; // Update the path

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, email, phone, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Compose email options
    const mailOptions = {
      from: email,
      to: 'kharel.atul2@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
