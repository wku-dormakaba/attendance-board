import styles from '../styles/Home.module.css'
import { list } from '../data/list'
import Board from '../components/board'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/pd-apac">
              <a>PD APAC</a>
            </Link>
          </h3>
        </div>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/digital-apac">
              <a>Digital APAC</a>
            </Link>
          </h3>
        </div>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/ead-apac">
              <a>EAD APAC</a>
            </Link>
          </h3>
        </div>
      </div>
      <hr />
      <Board team={{ name: 'Team ABC', list }} />

    </div>
  )
}
