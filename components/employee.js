import { useState } from 'react'
import axios from 'axios'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const Employee = ({ id, location }) => {
  const [presence, setPresence] = useState(location)

  const markPresence = async (event, newValue) => {
    if (newValue !== null) {
      setPresence(newValue)
      await axios.post('/api/presence', { id, presence: newValue })
    }
  }

  return <tr>
    <td>{id}</td>
    <td>
      <ToggleButtonGroup
        value={presence}
        exclusive
        onChange={markPresence}
        aria-label="Location"
      >
        <ToggleButton size="small" value="office" aria-label="office">
          <div>Office</div>
        </ToggleButton>
        <ToggleButton size="small" value="wfh" aria-label="wfh">
          <div>WFH</div>
        </ToggleButton>
      </ToggleButtonGroup>
    </td>
  </tr >
}

export default Employee