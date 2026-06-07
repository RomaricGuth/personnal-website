import Footer from "./footer";
import Header from "./header";
import ScrollProgress from "./scrollProgress";

export default async function Layout({ children }) {
  return (
    <>
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
