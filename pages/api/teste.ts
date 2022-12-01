import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseBody = { result: string | number};

export default function handler(req: NextApiRequest, res: NextApiResponse<Object>) {
  
  const { method } = req
  const { id } = req.query

  return res.status(200).json({ result: id });

};