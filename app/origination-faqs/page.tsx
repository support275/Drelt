import PageShell from "../components/PageShell";
import OriginationFAQsContent from "../components/OriginationFAQsContent";

export const metadata = { title: "Origination FAQs — DREEF DRELT" };

export default function OriginationFAQsPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Origination &amp;</span>
          <span className="block">Screening FAQs</span>
        </>
      }
    >
      <OriginationFAQsContent />
    </PageShell>
  );
}
