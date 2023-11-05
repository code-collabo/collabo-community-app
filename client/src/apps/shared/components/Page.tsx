import { AppProps } from 'next/app';
import PageStructureCodeCollaboSubCommunity from '@/apps/code-collabo/components/PageStructure';

export default function Page({ Component, pageProps }: AppProps) {
  console.log({ Component, pageProps });
  return (
    <>
      <PageStructureCodeCollaboSubCommunity>
        <Component { ...pageProps } />
      </PageStructureCodeCollaboSubCommunity>
    </>
  );
};