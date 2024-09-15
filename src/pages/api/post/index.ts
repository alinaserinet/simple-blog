// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '@utils';


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await connectMongoDB();
  res.status(200).json({ message: 'Connected to MongoDB' });
};

export default handler;