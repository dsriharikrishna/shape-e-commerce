import Blogs1 from "@/components/blogs/Blogs1";
import BlogSlider from "@/components/blogs/BlogSlider";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Default"
      />

      <BlogSlider />
      <Blogs1 />
    </>
  );
}
