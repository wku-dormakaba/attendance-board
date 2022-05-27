import Board from '../components/board'
import { ead_apac } from '../data/list'
import { getList } from '../components/cache'

function EAD_APAC({ list }) {
  return (<Board team={{ name: 'EAD APAC', list }} />)
}

export async function getStaticProps() {
  const locations = (await getList(ead_apac)).map(e => e === 'true')
  const list = ead_apac.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    },
  }
}

export default EAD_APAC