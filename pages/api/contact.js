export default async function (req, res) {
  require('dotenv').config()

  const nodemailer = require('nodemailer')
  const { name, email, textarea } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 587,
      secure: true,
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    const mailOptionsToMy = {
      from: `Ashram ${process.env.email}`,
      to: process.env.email,
      subject: `Nuevo Comentario de ${name} ${email}`,
      text: textarea,
    }

    const mailOptionsToUser = {
      from: `Ashram ${process.env.email}`,
      to: email,
      subject: `Gracias ${name}`,
      text: 'Gracias por contactarnos en breves le responderemos!!',
    }

    await transporter.sendMail(mailOptionsToMy)
    await transporter.sendMail(mailOptionsToUser)
    res.send('success')
  } catch (err) {
    console.log(err)
  }
}
