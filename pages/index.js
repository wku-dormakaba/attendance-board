import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/ahs-sg">
              <a>AHS SG</a>
            </Link>
          </h3>
        </div>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/acs-sg">
              <a>ACS SG</a>
            </Link>
          </h3>
        </div>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/cpss-sg">
              <a>CPSS SG</a>
            </Link>
          </h3>
        </div>
        <div className={styles.card}>
          <h3 className="title">
            <Link href="/sg-other">
              <a>SG Other</a>
            </Link>
          </h3>
        </div>
      </Grid>
    </Container>
  )
}
