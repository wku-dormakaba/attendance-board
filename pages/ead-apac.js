import Board from '../components/board'
import { ead_apac } from '../data/list'

function EAD_APAC() {
  return (<Board team={{ name: 'EAD APAC', list: ead_apac }} />)
}

export default EAD_APAC