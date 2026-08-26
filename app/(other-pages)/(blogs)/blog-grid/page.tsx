import Blogs2 from "@/components/blogs/Blogs2";
import Breadcrumb from "@/components/common/Breadcrumb";

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
