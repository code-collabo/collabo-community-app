import { NextPageWithLayout } from '@/pages/_app';
import { getCustom404Layout } from '@/apps/shared/components/Custom404PageLayout';
import CodeCollabo404Component from '@/apps/code-collabo/components/404component'
import Community404Component from '@/apps/community/components/404component'
import OtherSubcommunity404Component from '@/apps/other-subcommunity/components/404component'

const Custom404Page: NextPageWithLayout = () => {
  return (
    <>
      <CodeCollabo404Component></CodeCollabo404Component>
      {/* <Community404Component></Community404Component> */}
      {/* <OtherSubcommunity404Component></OtherSubcommunity404Component> */}
    </>
  );
};

Custom404Page.getLayout = getCustom404Layout;
export default Custom404Page;
