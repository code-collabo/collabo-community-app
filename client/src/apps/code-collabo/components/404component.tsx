import custom404 from '@/apps/code-collabo/styles/modules/custom404.module.css';
import { useRouter } from 'next/router';

export default function Custom404Component() {
  let { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      <h1 className={`${custom404.test} dummy-module-text`}>Code Collabo Subcommunity 404 page content</h1>
    </>
  );
};
