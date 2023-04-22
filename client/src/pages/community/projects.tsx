import { app } from '@/helpers/common';
import Head from 'next/head';

export default function ProjectsPage() {
  const title = `${app.name} | Projects `;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p><b>Projects page</b> (other) content here</p>
    </>
  );
};
