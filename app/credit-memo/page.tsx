import PageShell from "../components/PageShell";
import CreditMemoContent from "../components/CreditMemoContent";

export const metadata = { title: "Credit Memo — DREEF DRELT" };

export default function CreditMemoPage() {
  return (
    <PageShell>
      <CreditMemoContent />
    </PageShell>
  );
}
