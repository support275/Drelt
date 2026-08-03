import PageShell from "../components/PageShell";
import WorkflowContent from "../components/WorkflowContent";

export const metadata = { title: "Workflow — DREEF DRELT" };

export default function WorkflowPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Implementation</span>
          <span className="block">Workflow</span>
        </>
      }
    >
      <WorkflowContent />
    </PageShell>
  );
}
