import '@/styles/app.base.globals.css';
import '@/styles/app.main.globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
};
