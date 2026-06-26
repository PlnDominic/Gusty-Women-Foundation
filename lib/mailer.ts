import nodemailer from 'nodemailer'

export const GWF_EMAIL = process.env.GWF_EMAIL ?? 'gutsywomenfoundation@gmail.com'

export function getTransporter() {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!user || !pass) {
    throw new Error('SMTP_USER and SMTP_PASS environment variables are not configured.')
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user, pass },
  })
}
