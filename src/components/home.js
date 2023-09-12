import Presentation from "./presentation";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import LastCall from "./lastCall";

export default function Home() {
    return (
        <div>
            <Presentation/>
            <Section id="about">
                <About />
            </Section>
            <Section id="portfolio" dense={true}>
                <Portfolio />
            </Section>
            <Section id="testimonials">
                <Testimonials />
            </Section>
            <Section id="contact">
                <LastCall />
            </Section>
        </div>
    )
}