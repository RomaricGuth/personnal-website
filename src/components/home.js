import Presentation from "./presentation";
import Menu from "./menu";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import ContactButton from "./contactButton";
import Footer from "./footer";
import LastCall from "./lastCall";

export default function Home() {
    return (
        <div>
            <Presentation/>
            <Section id="about" class="mb-16">
                <About />
            </Section>
            <Portfolio />
            <Section id="testimonials">
                <Testimonials />
            </Section>
            <Section>
                <LastCall />
            </Section>
        </div>
    )
}