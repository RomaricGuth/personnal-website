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
      <Section class="bg-black py-4">
        <Footer/>
      </Section>
    </footer>
    </>
  )
}