// import PageHeadElement from '@/apps/community/components/shared/PageHeadElement';
// // import { app } from '../../files/code-collabo/helpers/app';
// import {}

import { NextPageWithLayout } from '../_app';
import { getCommunityLayout } from '@/apps/community/components/AppPageLayout';

import home from '@/apps/community/styles/modules/home.module.css';

const AppHomePage: NextPageWithLayout = () => {
  // const pageMetaDataObj = {
  //   subcommunityName: app.name,
  //   pageName: app.pages.home.name,
  // }
  return (
    <>
      {/* <PageHeadElement { ...pageMetaDataObj } /> */}
      <h2 className={home.test}>Collabo Community Home/Landing page</h2>
    </>
  );
};

AppHomePage.getLayout = getCommunityLayout;
export default AppHomePage;
