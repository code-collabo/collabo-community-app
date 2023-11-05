import { NextPageWithLayout } from '../_app';
import { getOtherSubCommunityLayout } from '@/apps/other-subcommunity/components/AppPageLayout';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { first_subcommunity, first_subcommunity_home } from '@/apps/code-collabo/helpers/app';

import overview from '@/apps/other-subcommunity/styles/modules/overview.module.css';

const OverviewPageOther: NextPageWithLayout = () => {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_home.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <h2 className={overview.test}>Overview CSS Page Content Module Test!</h2>
    </>
  );
};

OverviewPageOther.getLayout = getOtherSubCommunityLayout;
export default OverviewPageOther;
