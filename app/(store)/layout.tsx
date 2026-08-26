import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="rbt-header-sticky">
        <Header3 sticky={true} />
        {children}
        <Footer3 />
      </div>
    </>
  );
}
