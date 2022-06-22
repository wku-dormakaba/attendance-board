import Board from '../components/board'
import { acs_sg } from '../data/list'
import { getList } from '../components/cache'

function ACS_SG({ list }) {
  return (<Board team={{ name: 'ACS SG', list }} />)
}

export async function getServerSideProps() {
  const locations = await getList(acs_sg)
  const list = acs_sg.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    }
  }
}
export default ACS_SG