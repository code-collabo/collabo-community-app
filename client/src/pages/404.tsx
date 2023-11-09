import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import Custom404Component from '@/apps/community/components/404component';

export default function Custom404() {
  return (
    <>
      <PageHeadElement
        pageTitle='404 - Page Not found'
        faviconUrl=''
      />

      <Custom404Component></Custom404Component>
    </>
  );
}
