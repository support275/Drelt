import PageShell from "../components/PageShell";
import DDIssuesContent from "../components/DDIssuesContent";

export const metadata = { title: "DD Issues — DREEF DRELT" };

export default function DDIssuesPage() {
  return (
    <PageShell>
      <DDIssuesContent />
    </PageShell>
  );
}
