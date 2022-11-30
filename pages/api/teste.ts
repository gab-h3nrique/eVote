import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseBody = { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseBody>) {
  
  const { method } = req
  console.log(req.query)
  console.log('api mehotd', method)

  res.status(200).json({ message: 'teste' });

};