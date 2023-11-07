import { NextPageWithLayout } from '@/pages/_app';
import { getCommunityLayout } from '@/apps/community/components/AppPageLayout';

import home from '@/apps/community/styles/modules/home.module.css';

const AppHomePage: NextPageWithLayout = () => {
  return (
    <>
      <h2 className={home.test}>Dummy Page Content: CSS Module Test!</h2>
    </>
  );
};

AppHomePage.getLayout = getCommunityLayout;
export default AppHomePage;
