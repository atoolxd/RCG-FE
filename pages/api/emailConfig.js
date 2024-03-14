// pages/api/emailConfig.js
const emailConfig = {
  host: 'smtp.office365.com',
  port: 587,
  secure: true,
  auth: {
    user: 'support@rocketeers.com.au', // Replace with your email address
    pass: 'BJpzj248', // Replace with your email password
  },
};

export default emailConfig;