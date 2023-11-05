import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '@/apps/shared/styles/imports.globals.css';

//-----------------------------------------------
import '@/apps/community/styles/app.imports.css';
import '@/apps/community/styles/app.main.css';

import '@/apps/code-collabo/styles/app.imports.css';
import '@/apps/code-collabo/styles/app.main.css';

import '@/apps/other-subcommunity/styles/app.imports.css';
import '@/apps/other-subcommunity/styles/app.main.css';
//-----------------------------------------------

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
