import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { emailTemplate } from "@/utils/emailTemplate";

dayjs.extend(utc);
dayjs.extend(timezone);

interface NextApiRequestBody extends NextApiRequest {
  body: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

export default function handler(req: NextApiRequestBody, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message, email, name, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const timeNow = dayjs(new Date().toISOString())
      .tz("America/Sao_Paulo")
      .format("DD MMMM YYYY, HH:mm:ss");

    const messageTemplate = emailTemplate(
      message,
      email,
      name,
      subject,
      timeNow
    );

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: "tashiro.dev Contact Form",
      text: messageTemplate,
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
