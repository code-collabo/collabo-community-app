import type { AppProps } from 'next/app';
import '@/apps/shared/styles/imports.globals.css';
import Page from '@/apps/shared/components/Page';

export default function App({ Component, pageProps }: AppProps) {
  console.log({ Component, pageProps });
  return (
    <></>
    // <Page { Component, pageProps }></Page>
    //   <Page>
    //     <Component { ...pageProps } />
    //  </Page>
  );
};
