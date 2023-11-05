import { NextPageWithLayout } from '../_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { first_subcommunity, first_subcommunity_2nd_page, first_subcommunity_home } from '@/apps/code-collabo/helpers/app';

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_2nd_page.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <h2 className={projects.test}>Projects Page Content CSS Module Test!</h2>
    </>
  );
};

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
