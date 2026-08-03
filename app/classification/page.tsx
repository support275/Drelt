import PageShell from "../components/PageShell";
import ClassificationContent from "../components/ClassificationContent";

export const metadata = { title: "Classification — DREEF DRELT" };

export default function ClassificationPage() {
  return (
    <PageShell
      heading={
        <>
          <span className="block">Issue Classification</span>
          <span className="block">Framework</span>
        </>
      }
    >
      <ClassificationContent />
    </PageShell>
  );
}
