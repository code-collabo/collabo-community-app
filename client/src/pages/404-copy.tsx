import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import Custom404Component from '@/apps/community/components/404component';

// export default function Custom404() {
//   return (
//     <>
//       <PageHeadElement
//         pageTitle='404 - Page Not found'
//         faviconUrl=''
//       />

//       <Custom404Component></Custom404Component>
//     </>
//   );
// };


// export { default } from './community/404';
// export { default } from './code-collabo/404';
// export { default } from './other-subcommunity/404';


OverviewPageCodeCollabo.getLayout = getCodeCollaboSubCommunityLayout;
export default OverviewPageCodeCollabo;