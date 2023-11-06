import Head from 'next/head';

export default function PageHeadElement({ pageTitle, faviconUrl }: { pageTitle: string, faviconUrl: string }) {
  return (
    <Head>
        <link rel="icon" type="image/x-icon" href={faviconUrl} />
        <title>{ pageTitle }</title>
    </Head>
  );
};

// import { app, subcommunities } from '@/apps/code-collabo/helpers/appInfo';

// export default function PageHeadElement({ landingPage, subcommunityName, pageName }: { landingPage?: boolean; subcommunityName: string; pageName: string }) {
//   // const appName = landingPage ? app.name : subcommunityName;
//   // const PageTitle = `${appName} | ${pageName}`;
//   return (
//     <Head>
//         <link rel="icon" type="image/x-icon" href="/code-collabo/favicon.ico" />
//         {/* <title>{ PageTitle }</title> */}
//     </Head>
//     // <Head>
//     //     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//     //     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//     //     <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//     //     <link rel="manifest" href="/site.webmanifest" />
//     //     <title>{ PageTitle }</title>
//     // </Head>
//   );
// };


