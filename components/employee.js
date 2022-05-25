import { useEffect, useState } from 'react'
import ToggleButton from 'react-toggle-button'
import axios from 'axios'

const markPresence = async (id, presence) => {
  await axios.post('/api/presence', { id, presence })
}

const Employee = ({ id }) => {
  const [presence, setPresence] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/presence?id=${encodeURI(id)}`);
      setPresence(result.data.presence);
    };

    fetchData();
  }, [])

  return <>
    <tr>
      <td>{id}</td>
      <td><ToggleButton
        value={presence}
        onToggle={value => {
          setPresence(!value)
          markPresence(id, !value)
        }} />
      </td>
    </tr>
  </>
}

export default Employee