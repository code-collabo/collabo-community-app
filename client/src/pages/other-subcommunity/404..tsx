import { NextPageWithLayout } from '@/pages/_app';
import { getOtherSubCommunityLayout } from '@/apps/other-subcommunity/components/AppPageLayout';
import Custom404Component from '@/apps/other-subcommunity/components/404component';

const Custom404PageOther: NextPageWithLayout = () => {
  return (
    <>
      <Custom404Component></Custom404Component>
    </>
  );
};

Custom404PageOther.getLayout = getOtherSubCommunityLayout;
export default Custom404PageOther;
