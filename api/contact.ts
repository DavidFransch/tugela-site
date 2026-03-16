import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  companySize: z.string().optional(),
  budget: z.string().optional(),
  interest: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const validatedData = contactSchema.parse(req.body);

    const { name, email, company, companySize, budget, interest, message } = validatedData;

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM || 'onboarding@resend.dev',
      to: [process.env.CONTACT_FORM_TO || 'hello@tugela.ai'],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Company Size:</strong> ${companySize || 'Not specified'}</p>
        <p><strong>Project Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Interests:</strong> ${interest?.join(', ') || 'None specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.issues[0].message });
    }
    console.error('API Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
