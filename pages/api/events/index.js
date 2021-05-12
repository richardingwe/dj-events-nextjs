const { events } = require('./data.json');

const request = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
export default request;