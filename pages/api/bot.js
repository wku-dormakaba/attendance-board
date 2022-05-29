const axios = require('axios')
import { getPresence, setPresence } from '../../components/cache'

const users = {
  '1050180035': 'Chee Chiang William Ku'
}

const status = {
  status: 'Get current status',
  office: 'In office',
  wfh: 'Working from home',
  outstation: 'Outside office or overseas',
  leave: 'On annual leave or MC'
}

const sendMessage = async (chat_id, text) => {
  const url = `https://api.telegram.org/bot5441977073:AAG4q1fluzy_sBv1x6FVrfxEmhpKY6tRuog/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=MarkdownV2`
  await axios(url)
}

const isValidLocation = location => {
  return ['office', 'wfh', 'outstation', 'leave'].includes(location)
}

const getLocation = text => {
  const location = text.slice(1)
  return isValidLocation(location) ? location : null
}

export default async function handler(req, res) {

  const { id, first_name } = req.body?.message?.from
  const text = req.body?.message?.text
  if (id) {
    sendMessage(id, `Hi ${first_name}`)

    const user = users[id]
    if (user) {
      if (text === '/status') {
        const presence = await getPresence(user)
        await sendMessage(id, `Your current location is "\`${status[presence]}\`"`)
      } else {
        const location = getLocation(text)
        if (location !== null) {
          setPresence(user, location)
          await sendMessage(id, `Your current location had been set to "\`${status[location]}\`"`)
        }
      }
    } else {
      await sendMessage(id, `Please approach admin to setup with your telegram chatid ${id}`)
    }
  }

  res.status(200).send('OK')
}