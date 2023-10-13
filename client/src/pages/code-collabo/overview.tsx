import { first_subcommunity, first_subcommunity_home } from '../../helpers/common';
import PageHeadElement from '@/components/shared/PageHeadElement';

export default function OverviewPage() {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_home.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <p><b>Overview page</b> (other) content here</p>
    </>
  );
};
