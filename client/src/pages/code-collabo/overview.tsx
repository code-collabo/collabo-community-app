import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import overview from '@/apps/code-collabo/styles/modules/overview.module.css';

const OverviewPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <>
      <p className={`${overview.test} dummy-module-text`}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;
