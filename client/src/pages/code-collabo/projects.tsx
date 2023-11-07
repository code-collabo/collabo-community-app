import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
  return (
    <>
      <p className={`${projects.test} dummy-module-text`}>Dummy Page Content: CSS Module Test!</p>
    </>
  );
};

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
