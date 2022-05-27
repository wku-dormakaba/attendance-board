import { useState } from 'react'
import ToggleButton from 'react-toggle-button'
import axios from 'axios'

const markPresence = async (id, presence) => {
  await axios.post('/api/presence', { id, presence })
}

const Employee = ({ id, location }) => {
  const [presence, setPresence] = useState(location)

  return <tr>
    <td>{id}</td>
    <td><ToggleButton
      value={presence}
      onToggle={value => {
        setPresence(!value)
        markPresence(id, !value)
      }} />
    </td>
  </tr>
}

export default Employee