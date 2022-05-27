import Board from '../components/board'
import { digital_apac } from '../data/list'
import { getList } from '../components/cache'

function Digital_APAC({ list }) {
  return (<Board team={{ name: 'Digital APAC', list }} />)
}

export async function getStaticProps() {
  const locations = (await getList(digital_apac)).map(e => (e ?? false))
  const list = digital_apac.map((n, i) => ({ name: n, location: locations[i] }))
  return {
    props: {
      list,
    },
  }
}

export default Digital_APAC