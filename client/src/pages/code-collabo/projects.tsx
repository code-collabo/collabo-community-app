import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <>
      <h2 className={projects.test}>Dummy Page Content: CSS Module Test!</h2>
    </>
  );
};

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
