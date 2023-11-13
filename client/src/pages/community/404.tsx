import { NextPageWithLayout } from '@/pages/_app';
import { getCommunityLayout } from '@/apps/community/components/AppPageLayout';
import Custom404Component from '@/apps/community/components/404component';

const AppCustom404Page: NextPageWithLayout = () => {
  return (
    <>
      <Custom404Component></Custom404Component>
    </>
  );
};

AppCustom404Page.getLayout = getCommunityLayout;
export default AppCustom404Page;
