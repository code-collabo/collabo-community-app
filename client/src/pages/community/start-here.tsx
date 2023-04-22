import Head from 'next/head';
import style from '@/styles/modules/start-here.module.css';
import { app } from '../../helpers/common';

export default function StartHerePage() {
  return (
    <>
      <Head>
        <title>{app.name} | Community</title>
      </Head>
      <p><b>Start here page</b> (other) content here</p>
    </>
  );
};
