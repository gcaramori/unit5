import nodemailer, { Transporter } from 'nodemailer'

interface EmailMessage {
  from: string
  to: string
  subject: string
  text?: string
  html?: string
}

export async function POST(request: Request) {
  const req = await request.json()

  const transporter: Transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    secure: false,
    auth: {
      user: '6ebd8b0d425ce1',
      pass: '86f7df16ed4522',
    },
  })

  const message: EmailMessage = {
    from: req.email,
    to: 'gcaramori16@gmail.com',
    subject: 'Test email',
    text: 'This is a test email sent from Nodemailer',
  }

  try {
    const sendedEmail = await transporter.sendMail(message)

    return Response.json({ sendedEmail, success: true })
  } catch (error) {
    return Response.json({ error, success: false })
  }
}
