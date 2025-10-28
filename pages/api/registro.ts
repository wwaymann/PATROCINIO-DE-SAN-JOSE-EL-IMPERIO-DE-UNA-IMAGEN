import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { nombre, email, preferencia, asistencia, capitulo } = req.body || {}
  // Aquí podrías enviar correo con Resend/SendGrid o guardar en una DB
  console.log('RSVP', { nombre, email, preferencia, asistencia, capitulo })
  return res.status(200).json({ ok: true })
}
