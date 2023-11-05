import { AppProps } from 'next/app';
import PageStructureCollaboCommunity from '@/apps/community/components/PageStructure';
import PageStructureCodeCollaboSubCommunity from '@/apps/code-collabo/components/PageStructure';
import PageStructureOtherSubCommunity from '@/apps/other-subcommunity/components/PageStructure';

export default function Page({ Component, pageProps }: AppProps) {
  console.log({ Component, pageProps });
  return (
    <>
      <PageStructureCollaboCommunity>
        <Component { ...pageProps } />
      </PageStructureCollaboCommunity>
      <PageStructureCodeCollaboSubCommunity>
        <Component { ...pageProps } />
      </PageStructureCodeCollaboSubCommunity>
      <PageStructureOtherSubCommunity>
        <Component { ...pageProps } />
      </PageStructureOtherSubCommunity>
    </>
  );
};