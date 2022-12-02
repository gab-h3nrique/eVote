import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseBody = { result: string | number};

export default function handler(req: NextApiRequest, res: NextApiResponse<Object>) {
  
  const { method } = req
  const { id } = req.query

  console.log('doing request............',  Math.ceil(Math.random() * 10))

  return res.status(200).json({ result: Math.ceil(Math.random() * 10) });

};