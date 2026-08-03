import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function PageShell({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Hero heading={heading} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
