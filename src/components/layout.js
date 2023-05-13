import Footer from "./footer";
import Menu from "./menu";
import Section from "./section";

export default function Layout({ children }) {
  return (
    <>
    <header>
      <Menu />
    </header>
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      {children}
    </main>
    <footer>
      <Section class="bg-black">
        <Footer/>
      </Section>
    </footer>
    </>
  )
}