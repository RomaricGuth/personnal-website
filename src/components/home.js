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
            <Presentation/>
            <Section>
                <About />
            </Section>
            <Section class="bg-black">
                <Portfolio />
            </Section>
            <Section>
                <Testimonials />
            </Section>
        </div>
    )
}