const { events } = require('./data.json');

const request = (req, res) => {
    const evt = events.json.filter(ev => ev.slug === req.query.slug);

    if (req.method === 'GET') {
        res.status(200).json(evt);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
};
export default request;