import Blogs1 from "@/features/blog/components/Blogs1";

import Breadcrumb from "@/shared/components/common/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Sidebar"
      />

      <Blogs1 />
    </>
  );
}
