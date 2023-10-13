import PageHeadElement from '@/components/shared/PageHeadElement';
import { first_subcommunity, first_subcommunity_2nd_page, first_subcommunity_home } from '@/helpers/common';

export default function ProjectsPage() {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_2nd_page.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <p><b>Projects page</b> (other) content here</p>
    </>
  );
};
