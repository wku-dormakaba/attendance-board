import Board from '../components/board'
import { pd_apac } from '../data/list'

function PD_APAC() {
  return (<Board team={{ name: 'PD APAC', list: pd_apac }} />)
}

export default PD_APAC