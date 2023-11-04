import { app, subcommunities } from '@/code-collabo/helpers/common';
import Head from 'next/head';

export default function PageHeadElement({ landingPage, subcommunityName, pageName }: { landingPage?: boolean; subcommunityName: string; pageName: string }) {
  const appName = landingPage ? app.name : subcommunityName;
  const PageTitle = `${appName} | ${pageName}`;
  return (
    <Head>
        <title>{ PageTitle }</title>
    </Head>
  );
};
