// pages/api/contact.js
import nodemailer from 'nodemailer';
import emailConfig from '/pages/api/emailConfig';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, email, phone, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Compose email options
    const mailOptions = {
      from: email,
      to: 'support@rocketeers.com.au', // Replace with your email address
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
    
      // Display a user-friendly error message to the user
      res.status(500).json({ success: false, error: 'An error occurred while sending the email. Please try again later.' });
    }
  }
}