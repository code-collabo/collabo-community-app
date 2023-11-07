import { NextPageWithLayout } from '../_app';
import { getOtherSubCommunityLayout } from '@/apps/other-subcommunity/components/AppPageLayout';

import overview from '@/apps/other-subcommunity/styles/modules/overview.module.css';

const OverviewPageOther: NextPageWithLayout = () => {
  return (
    <>
      <h2 className={overview.test}>Dummy Page Content: CSS Module Test!</h2>
    </>
  );
};

OverviewPageOther.getLayout = getOtherSubCommunityLayout;
export default OverviewPageOther;
