import { getPresence, setPresence } from '../../components/cache'

const status = {
  status: 'Get current status',
  office: 'In office',
  wfh: 'Working from home',
  outstation: 'Outside office or overseas',
  leave: 'On annual leave or MC'
}

const isValidLocation = location => {
  return ['office', 'wfh', 'outstation', 'leave'].includes(location)
}

const getLocation = text => {
  return isValidLocation(text) ? text : null
}

const getCommand = text => text.slice('<at>StaffMovementBoardBot</at> '.length).trim().replace(/nbsp;/g, '')

export default async function handler(req, res) {
  const { from: { name }, text } = req.body
  const response = {
    type: 'message',
    text: `Hi <at>${name}</at>`
  }

  if (name) {
    const user = await getPresence(name)
    const command = getCommand(text).toLowerCase()
    if (command === 'help') {
      response.text = 'status: show your current location'
      response.text += '   \noffice: set to office'
      response.text += '   \nwfh: set to Working from Home'
      response.text += '   \noutstation: you are outstation'
      response.text += '   \nleave: on Annual Leave or MC'
    } else if (command === 'status') {
      response.text += `, your current location is "\`${status[user]}\`"`
    } else {
      const location = getLocation(command)
      if (location !== null) {
        setPresence(name, location)
        response.text += `, your current location had been set to "\`${status[location]}\`"`
      } else {
        response.text += ', invalid command ...'
      }
    }
  } else {
    response.text += ', please approach admin for assistance'
  }

  res.status(200).json(response)
}