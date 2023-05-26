import Footer from "./footer";
import Header from "./header";
import Section from "./section";

export default function Layout({ children }) {
  return (
    <>
    <header>
      <Header />
    </header>
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
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