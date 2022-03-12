import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  results: string[]
}


const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results: ['post1', 'post2'] }));
}

export default handler;