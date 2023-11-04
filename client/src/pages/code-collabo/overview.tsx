import PageHeadElement from '@/code-collabo/components/shared/PageHeadElement';
import { first_subcommunity, first_subcommunity_home } from '../../code-collabo/helpers/common';
import overview from '@/styles/modules/code-collabo/overview.module.css';

export default function OverviewPage() {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_home.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <p><b>Overview page</b> (other) content here</p>
      <div className={overview.test}>Overview CSS Module Test!</div>
    </>
  );
};
