import Head from 'next/head';
import style from '@/styles/modules/start-here.module.css';
import { app } from '../../helpers/common';

export default function StartHerePage() {
  const title = `${app.name} | Community `;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p><b>Start here page</b> (other) content here</p>
    </>
  );
};
