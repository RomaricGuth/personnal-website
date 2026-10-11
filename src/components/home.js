import Presentation from "./presentation";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import LastCall from "./lastCall";
import Motion from "./motion";

export default function Home() {
  return (
    <div className="bg-[#faf9f7]">
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
        <Section id="testimonials" className="bg-white">
          <Testimonials />
        </Section>
      </Motion>
      <Motion animation="fadeIn">
        <Section id="contact" className="bg-neutral-950 text-white">
          <LastCall />
        </Section>
      </Motion>
    </div>
  );
}
