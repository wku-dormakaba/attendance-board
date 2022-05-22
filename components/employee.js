import { useEffect, useState } from 'react'
import ToggleButton from 'react-toggle-button'
import axios from 'axios'

const Employee = ({ id, name }) => {

  const [presence, setPresence] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/presence?id=${id}`);
      setPresence(result.data.presence);
    };

    fetchData();
  }, [])

  return <>
    <tr>
      <td>{name}</td>
      <td><ToggleButton
        value={presence}
        onToggle={(value) => {
          setPresence(!value)
        }} />
      </td>
    </tr>
  </>
}

export default Employee