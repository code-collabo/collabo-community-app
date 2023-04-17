import Head from 'next/head';
import styles from '@/styles/home.module.css';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Collabo Web App</title>
        <meta name="description" content="Collab Web App: Code Collabo FOSS community's web app client" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.boxTest} ${styles.color}`}>Box</div>
      <Card />
    </>
  );
}
