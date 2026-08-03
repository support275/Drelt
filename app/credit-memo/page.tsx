import PageShell from "../components/PageShell";
import CreditMemoContent from "../components/CreditMemoContent";

export const metadata = { title: "Credit Memo — DREEF DRELT" };

export default function CreditMemoPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Credit Memo</span>
          <span className="block">Template</span>
        </>
      }
    >
      <CreditMemoContent />
    </PageShell>
  );
}
