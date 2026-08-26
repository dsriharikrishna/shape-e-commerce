import Blogs1 from "@/features/blog/components/Blogs1";
import BlogSlider from "@/features/blog/components/BlogSlider";
import Breadcrumb from "@/shared/components/common/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb subtitle="" hasHrLine title="Blog Infinite Scroll" />
      <BlogSlider />
      <Blogs1 />
    </>
  );
}
