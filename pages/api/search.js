import { getSortedPostsData } from '../../lib/posts';

const allPostsData = process.env.NODE_ENV === 'production' ? require('../../cache/data').allPostsData : getSortedPostsData()

const handler = (req, res) => {
  const results = req.query.q ?
    allPostsData.filter(postData => postData.title.includes(req.query.q)) : []
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
}

export default handler;