'use server'

import { LEAD_EMAIL } from '@/lib/constants'

export type LeadState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export type Lead = {
  fullName: string
  phone: string
  email: string
  childAge: string
  message: string
}

/**
 * Server action for handling lead submissions from the contact form.
 *
 * The lead is validated here and is ready to be sent to LEAD_EMAIL
 * (yon228@gmail.com). To make sending functional, plug in an email
 * provider below (e.g. Resend, Nodemailer, SendGrid) — the parsed
 * `lead` object contains all the fields you need.
 */
export async function submitLead(
  _prevState: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const lead: Lead = {
    fullName: String(formData.get('fullName') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    childAge: String(formData.get('childAge') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }

  // Basic server-side validation
  if (!lead.fullName || lead.fullName.length < 2) {
    return { status: 'error', message: 'נא להזין שם מלא תקין.' }
  }

  const phoneDigits = lead.phone.replace(/[\s-]/g, '')
  if (!/^0\d{8,9}$/.test(phoneDigits)) {
    return { status: 'error', message: 'נא להזין מספר טלפון תקין.' }
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { status: 'error', message: 'נא להזין כתובת אימייל תקינה.' }
  }

  try {
    // ─────────────────────────────────────────────────────────────
    // TODO: Connect an email service here to deliver the lead.
    //
    // Example with Resend:
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'leads@ozniel.co.il',
    //     to: LEAD_EMAIL,
    //     subject: `ליד חדש מהאתר - ${lead.fullName}`,
    //     text: `שם: ${lead.fullName}\nטלפון: ${lead.phone}\n` +
    //           `אימייל: ${lead.email}\nגיל הילד: ${lead.childAge}\n` +
    //           `הודעה: ${lead.message}`,
    //   })
    // ─────────────────────────────────────────────────────────────

    console.log('[v0] New lead received (to be sent to %s):', LEAD_EMAIL, lead)

    return {
      status: 'success',
      message: 'תודה! הפרטים התקבלו ונציג מאוזניאל יחזור אליכם בהקדם.',
    }
  } catch (error) {
    console.log('[v0] Failed to submit lead:', error)
    return {
      status: 'error',
      message: 'אירעה שגיאה בשליחת הפרטים. נסו שוב או פנו אלינו בוואטסאפ.',
    }
  }
}
