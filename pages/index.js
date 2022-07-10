import styles from '../styles/Home.module.css'

import Head from 'next/head'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Giver</title>
        <meta name="description" content="App that gives advice using OpenAI GPT-3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Give me some advice on...</h1>
        <input type="text" />
      </div>
    </div>
  )
}

export default Home;