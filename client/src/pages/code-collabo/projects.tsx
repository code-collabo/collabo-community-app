import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { first_subcommunity, first_subcommunity_2nd_page, first_subcommunity_home } from '@/apps/code-collabo/helpers/app';
import projects from '@/apps/code-collabo/styles/modules/projects.module.css';

export default function ProjectsPage() {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: first_subcommunity_2nd_page.name,
  }
  return (
    <>
      <PageHeadElement { ...pageMetaDataObj } />
      <p><b>Projects page</b> (other) content here</p>
      <div className={projects.test}>Projects CSS Module Test!</div>
    </>
  );
};
