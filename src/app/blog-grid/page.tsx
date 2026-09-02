import Blogs2 from "@/features/blog/components/Blogs2";
import Breadcrumb from "@/shared/components/common/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Grid"
      />
      <Blogs2 />
    </>
  );
}
