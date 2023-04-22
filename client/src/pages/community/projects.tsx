import { app } from '@/helpers/common';
import Head from 'next/head';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{app.name} | Projects</title>
      </Head>
      <p><b>Projects page</b> (other) content here</p>
    </>
  );
};
