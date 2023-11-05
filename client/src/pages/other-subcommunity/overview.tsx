import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { first_subcommunity, first_subcommunity_home } from '@/apps/code-collabo/helpers/app';
import overview from '@/apps/other-subcommunity/styles/modules/overview.module.css';

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
