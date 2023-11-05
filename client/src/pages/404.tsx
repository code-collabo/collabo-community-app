import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { app } from '@/apps/code-collabo/helpers/app';

export default function Custom404() {
  const pageMetaDataObj = {
    subcommunityName: app.name,
    pageName: "404 - Page not found",
  };
  return (
    <>
      <PageHeadElement {...pageMetaDataObj} />
      <h1>404 - Custom Page Not Found</h1>
    </>
  );
}
