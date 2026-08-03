import PageShell from "../components/PageShell";
import ChecklistContent from "../components/ChecklistContent";

export const metadata = { title: "Checklist — DREEF DRELT" };

export default function ChecklistPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Due Diligence</span>
          <span className="block">Outputs Checklist</span>
        </>
      }
    >
      <ChecklistContent />
    </PageShell>
  );
}
