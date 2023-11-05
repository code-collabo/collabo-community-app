import type { AppProps } from 'next/app';
import '@/apps/shared/styles/imports.globals.css';
import Page from '@/apps/shared/components/Page';

export default function App(appProps: AppProps) {
  // console.log(appProps);
  return <Page { ...appProps }></Page>;
};
