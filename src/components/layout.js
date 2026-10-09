import Footer from "./footer";
import Header from "./header";
import ScrollProgress from "./scrollProgress";
import PreviewWarning from "./previewWarning";

export default async function Layout({ children }) {
  return (
    <>
      <PreviewWarning />
      <ScrollProgress />
      <header className="sticky top-0 z-40">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
