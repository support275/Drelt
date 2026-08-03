import PageShell from "../components/PageShell";
import ChecklistContent from "../components/ChecklistContent";

export const metadata = { title: "Checklist — DREEF DRELT" };

export default function ChecklistPage() {
  return (
    <PageShell>
      <ChecklistContent />
    </PageShell>
  );
}
