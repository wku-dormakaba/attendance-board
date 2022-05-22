import { useState } from 'react'
import ToggleButton from 'react-toggle-button'
import { getPresence, markPresence } from './cache'
const Employee = ({ id, name }) => {

  const [attendance, setAttendance] = useState(getPresence(id))

  return <>
    <tr>
      <td>{name}</td>
      <td><ToggleButton
        value={attendance}
        onToggle={(value) => {
          markPresence(id, !value)
          setAttendance(!value)
        }} />
      </td>
    </tr>
  </>
}

export default Employee