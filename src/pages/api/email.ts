import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface NextApiRequestBody extends NextApiRequest {
  body: {
    name: string;
    email: string;
    suibject: string;
    message: string;
  };
}

export default function handler(req: NextApiRequestBody, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message, email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: "tashiro.dev Contact Form",
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);

        return res
          .status(500)
          .json({ message: "Email not sent. Internal Error🔨, oops D:" });
      } else {
        console.log("Email sent from: " + info.envelope.from);

        return res.status(200).json({ message: "Email sent 🎉🎉" });
      }
    });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
