import { app } from '@/helpers/common';
import Head from 'next/head';

export default function InternshipPage() {
  const title = `${app.name} | Internships `;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p><b>Internships page</b> (other) content here</p>
    </>
  );
};