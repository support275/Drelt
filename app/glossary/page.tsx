import PageShell from "../components/PageShell";
import GlossaryContent from "../components/GlossaryContent";

export const metadata = { title: "Glossary — DREEF DRELT" };

export default function GlossaryPage() {
  return (
    <PageShell heading="Glossary of Terms">
      <GlossaryContent />
    </PageShell>
  );
}
