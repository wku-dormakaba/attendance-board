const axios = require('axios')
import { getPresence, setPresence } from '../../components/cache'
import { chat_ids } from '../../data/chat_ids'

const status = {
  status: 'Get current status',
  office: 'In office',
  wfh: 'Working from home',
  outstation: 'Outside office or overseas',
  leave: 'On annual leave or MC'
}

const sendMessage = async (chat_id, text) => {
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=MarkdownV2`
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
  const { id, first_name } = req?.body?.message?.from ?? {}
  const text = req.body?.message?.text
  if (id) {
    await sendMessage(id, `Hi ${first_name}`)

    const user = chat_ids[id]
    if (user) {
      if (text === '/start') {
        await sendMessage(id, 'Welcome to the Staff Movement Board')
      } else if (text === '/status') {
        const presence = await getPresence(user)
        await sendMessage(id, `Your current location is "\`${status[presence]}\`"`)
      } else {
        const location = getLocation(text)
        if (location !== null) {
          setPresence(user, location)
          await sendMessage(id, `Your current location had been set to "\`${status[location]}\`"`)
        } else {
          await sendMessage(id, 'Invalid command')
        }
      }
    } else {
      await sendMessage(id, `Please approach admin to setup with your telegram chatid ${id}`)
    }
  }

  res.status(200).send('OK')
}