import PageShell from "../components/PageShell";
import CaseStudyContent from "../components/CaseStudyContent";

export const metadata = { title: "Case Study — DREEF DRELT" };

export default function CaseStudyPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Expanded Case</span>
          <span className="block">Study</span>
        </>
      }
    >
      <CaseStudyContent />
    </PageShell>
  );
}
