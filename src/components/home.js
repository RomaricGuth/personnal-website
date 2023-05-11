import Presentation from "./presentation";
import Menu from "./menu";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import ContactButton from "./contactButton";
import Footer from "./footer";

export default function Home() {
    return (
        <div>
            <Menu />
            <Presentation/>
            <Section>
                <About />
            </Section>
            <Section class="bg-red-700">
                <Portfolio />
            </Section>
            <Section>
                <Testimonials />
            </Section>
            <Section class="bg-black">
                <Footer />
            </Section>
        </div>
    )
}