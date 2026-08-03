import PageShell from "../components/PageShell";
import PillarsContent from "../components/PillarsContent";

export const metadata = { title: "Pillars — DREEF DRELT" };

export default function PillarsPage() {
  return (
    <PageShell heading="Assessment Pillars">
      <PillarsContent />
    </PageShell>
  );
}
