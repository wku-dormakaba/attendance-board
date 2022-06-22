import Board from '../components/board'
import { sg_other } from '../data/list'
import { getList } from '../components/cache'

function SG_OTHER({ list }) {
  return (<Board team={{ name: 'SG Other', list }} />)
}

export async function getServerSideProps() {
  const locations = await getList(sg_other)
  const list = sg_other.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    }
  }
}

export default SG_OTHER