import PageShell from "../components/PageShell";
import DDIssuesContent from "../components/DDIssuesContent";

export const metadata = { title: "DD Issues — DREEF DRELT" };

export default function DDIssuesPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Repetitive Due</span>
          <span className="block">Diligence Issues</span>
        </>
      }
    >
      <DDIssuesContent />
    </PageShell>
  );
}
