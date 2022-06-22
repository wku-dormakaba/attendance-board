import Board from '../components/board'
import { ahs_sg } from '../data/list'
import { getList } from '../components/cache'

function AHS_SG({ list }) {
  return (<Board team={{ name: 'AHS SG', list }} />)
}

export async function getServerSideProps() {
  const locations = await getList(ahs_sg)
  const list = ahs_sg.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    }
  }
}

export default AHS_SG