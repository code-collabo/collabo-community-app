import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import overview from '@/apps/code-collabo/styles/modules/overview.module.css';

const OverviewPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <>
      <h2 className={overview.test}>Dummy Page Content: CSS Module Test!</h2>
    </>
  );
};

OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;
