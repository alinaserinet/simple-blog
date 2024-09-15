// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Auth } from '@/pages/api/auth/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auth>,
) {
  res.status(200).json({ token: 'token' });
}