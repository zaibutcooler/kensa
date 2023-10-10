import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 2525,
  auth: {
    user: "zaiyellyintaung@hotmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
})

export const sendEmail = async () => {
  const mailOptions = {
    from: "zaiyellyintaung@hotmail.com",
    to: "frostisnotgay@gmail.com",
    body: "Hiii how are you",
    subject: "Hola",
  }

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) return console.log(error)

    console.log("Email sent: ", info)
  })
}
