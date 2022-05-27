import Board from '../components/board'
import { pd_apac } from '../data/list'
import { getList } from '../components/cache'

function PD_APAC({ list }) {
  return (<Board team={{ name: 'PD APAC', list }} />)
}

export async function getStaticProps() {
  const locations = (await getList(pd_apac)).map(e => e === 'true')
  const list = pd_apac.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    },
    revalidate: 1
  }
}
export default PD_APAC