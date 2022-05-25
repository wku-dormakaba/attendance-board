import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { list } from '../data/list'
import Board from '../components/board'

function refreshPage() {
  window.location.reload(false);
}

export default function Home() {
  return (
    <Board team={{ name: 'Team ABC', list }} />

  )
}
