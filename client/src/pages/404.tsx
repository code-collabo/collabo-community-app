import PageHeadElement from "@/shared/PageHeadElement";
import { app } from "@/code-collabo/helpers/common";

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
