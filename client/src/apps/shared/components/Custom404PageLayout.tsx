import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import PageLayout from '@/apps/shared/components/PageLayout';
import CodeCollaboPageStructure from '@/apps/code-collabo/components/AppPageStructure';
import CommunityPageStructure from '@/apps/community/components/AppPageStructure';
import OtherSubcommunityPageStructure from '@/apps/other-subcommunity/components/AppPageStructure';

export function getCustom404Layout(page: ReactElement) {
    let u = useRouter();
    
    console.log(u);
    return (
      <PageLayout>
        <CodeCollaboPageStructure>{page}</CodeCollaboPageStructure>
        {/* <CommunityPageStructure>{page}</CommunityPageStructure> */}
        {/* <OtherSubcommunityPageStructure>{page}</OtherSubcommunityPageStructure> */}
      </PageLayout>
    );
};
