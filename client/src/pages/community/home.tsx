import PageHeadElement from '@/community/components/shared/PageHeadElement';
import { app } from '../../code-collabo/helpers/common';
import home from '@/styles/modules/home.module.css';

export default function AppHomePage() {
  const pageMetaDataObj = {
    subcommunityName: app.name,
    pageName: app.pages.home.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <p><b>Overview page</b> (other) content here</p>
      <h1 className={home.test}>Collabo Community Home/Landing page</h1>
    </>
  );
};
