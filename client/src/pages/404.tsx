import PageHeadElement from "@/components/shared/PageHeadElement";
import { first_subcommunity } from "@/helpers/common";

export default function Custom404() {
  const pageMetaDataObj = {
    subcommunityName: first_subcommunity.name,
    pageName: "404 - Page not found",
  };
  return (
    <>
      <PageHeadElement {...pageMetaDataObj} />
      <h1>404 - Custom Page Not Found</h1>
    </>
  );
}
