import Presentation from "./presentation";
import Menu from "./menu";
import Section from "./section";
import About from "./about";

export default function Home() {
    return (
        <div>
            <Menu />
            <Presentation/>
            <Section>
                <About />
            </Section>
        </div>
    )
}