export const emailTemplate = (
  message: string,
  email: string,
  name: string,
  subject: string,
  timeNow: string
) => {
  return `
Email from: ${name} - ${email}
Send at: ${timeNow}
Subject: ${subject}
Message: 
${message}
  `;
};
