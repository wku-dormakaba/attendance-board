import { useState } from 'react'
import axios from 'axios'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Employee = ({ id, location }) => {
  const [presence, setPresence] = useState(location)

  const markPresence = async (event, newValue) => {
    setPresence(newValue)
    await axios.post('/api/presence', { id, presence: newValue ?? 'null' })

  }

  return <TableRow>
    <TableCell>{id}</TableCell>
    <TableCell align="center">
      <ToggleButtonGroup
        value={presence}
        exclusive
        onChange={markPresence}
        aria-label="Location"
      >
        <ToggleButton size="small" value="office" aria-label="office">
          <span>Office</span>
        </ToggleButton>
        <ToggleButton size="small" value="wfh" aria-label="wfh">
          <span>WFH</span>
        </ToggleButton>
        <ToggleButton size="small" value="outstation" aria-label="outstation">
          <span>Outstation</span>
        </ToggleButton>
        <ToggleButton size="small" value="leave" aria-label="on leave">
          <span>On Leave/MC</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </TableCell>
  </TableRow >
}

export default Employee