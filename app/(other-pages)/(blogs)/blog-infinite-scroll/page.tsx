import Blogs1 from "@/components/blogs/Blogs1";
import BlogSlider from "@/components/blogs/BlogSlider";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb subtitle="" hasHrLine title="Blog Infinite Scroll" />
      <BlogSlider />
      <Blogs1 />
    </>
  );
}
