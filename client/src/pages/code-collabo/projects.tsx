import { NextPageWithLayout } from '@/pages/_app';
import { getCodeCollaboSubCommunityLayout } from '@/apps/code-collabo/components/AppPageLayout';

import projects from '@/apps/code-collabo/styles/modules/projects.module.css';
import useScreenDimensions from '@/apps/code-collabo/helpers/useScreenDimensions';
import selectStyles from '@/apps/code-collabo/styles/modules/projects.module.css';

const ProjectsPageCodeCollabo: NextPageWithLayout = () => {
  const  { isMobile }  = useScreenDimensions();
  return (
    <>
      {
        !isMobile ? (
        // web view
          <div className={projects.container}>
            {/* No card display component */}
            {/* --- Filters --- */}
            <div className={projects.filter}>
              Filter by:
              <select className={selectStyles.select}>
                <option value="interest">Interest</option>
              </select>
              <select  className={selectStyles.select}>
                <option value="skill set">Skill Set</option>
              </select>
            </div>
            {/* --- Card display --- */}
            <div className={projects.cardDisplay}>Project cards content area</div>
            {/* --- Pagination --- */}
            <div className={projects.pagination}>Pagination Component Here</div>
          </div>
        ) : (
        // Mobile view
          <div className={projects.containerMobile}>
            Mobile Card display
          </div>
        )
      }
    </>
  );
};

ProjectsPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default ProjectsPageCodeCollabo;
