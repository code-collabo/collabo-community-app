import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';
import Custom404Component from '@/apps/code-collabo/components/404component'

const Custom404PageCodeCollabo: NextPageWithLayout = () => {
  return (
    <>
      <Custom404Component></Custom404Component>
    </>
  );
};

Custom404PageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default Custom404PageCodeCollabo;
