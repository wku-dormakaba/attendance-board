import Board from '../components/board'
import { cpss_sg } from '../data/list'
import { getList } from '../components/cache'

function CPSS_SG({ list }) {
  return (<Board team={{ name: 'CPSS SG', list }} />)
}

export async function getServerSideProps() {
  const locations = await getList(cpss_sg)
  const list = cpss_sg.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    }
  }
}

export default CPSS_SG