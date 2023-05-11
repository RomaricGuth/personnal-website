import Presentation from "./presentation";
import Menu from "./menu";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";

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
        </div>
    )
}