import { getPresence, setPresence } from '../../components/cache'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    res.status(200).json({ id, presence: getPresence(id) })
  } else if (req.method === 'POST') {
    const { id, presence } = req.body
    setPresence(id, presence)
    res.status(200).json({ id, presence: getPresence(id) })
  } else {
    res.status(400).send('Invalid HTTP method')
  }

}
