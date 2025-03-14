import Presentation from "./presentation";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import LastCall from "./lastCall";
import Motion from "./motion";

export default function Home() {
  return (
    <div>
      <Presentation />
      <Motion animation="fadeIn">
        <Section id="about">
          <About />
        </Section>
      </Motion>
      <Section id="portfolio" dense={true}>
        <Portfolio />
      </Section>
      <Motion animation="fadeIn">
        <Section id="testimonials">
          <Testimonials />
        </Section>
      </Motion>
      <Motion animation="fadeIn">
        <Section id="contact">
          <LastCall />
        </Section>
      </Motion>
    </div>
  );
}
