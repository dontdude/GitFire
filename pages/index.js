import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitFire App</title>
        <meta name="description" content="NEXT.js App to use Firebase for Auth, and implement gitHub profile search." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a style={{color:"orange"}}>GitFire!</a>
        </h1>

        <p className={styles.description}>
          Register or Login here and get access to
          <code className={styles.code}>/dashboard</code>
        </p>

        <div className={styles.grid}>

          <a href="https://firebase.google.com/" className={styles.card}>
            <h2>Firebase &rarr;</h2>
            <p>Firebase is an app development platform backed by Google, and used here for various Authentication method!</p>
          </a>

          <a href="https://nextjs.org/" className={styles.card}>
            <h2>Next.js &rarr;</h2>
            <p>Using Next.js as a react framework, for various features like inbuilt API handler, environment variables features, file based routing etc.</p>
          </a>

          <a href="https://docs.github.com/en/rest" className={styles.card}>
            <h2>Github API &rarr;</h2>
            <p>Search any Github User, and it will use Github API to display user details and there list of there public repos.</p>
          </a>

        </div>
      </main>

    </div>
  )
}
