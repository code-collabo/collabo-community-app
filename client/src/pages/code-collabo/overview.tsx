import Head from 'next/head';
import style from '@/styles/modules/start-here.module.css';
import { app } from '../../helpers/common';

export default function StartHerePage() {
  const title = `${app.name} | Overview `;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p><b>Overview page</b> (other) content here</p>
    </>
  );
};
