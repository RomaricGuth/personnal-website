import Footer from "./footer";
import Header from "./header";
import Section from "./section";

export default function Layout({ children }) {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}