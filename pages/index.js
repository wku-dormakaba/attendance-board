import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
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
      </Grid>
    </Container>
  )
}
