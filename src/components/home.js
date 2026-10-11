import Presentation from "./presentation";
import Section from "./section";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import LastCall from "./lastCall";
import Motion from "./motion";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#fcfaf8]">
      <Presentation />
      <Section id="portfolio" dense={true} className="bg-white">
        <Portfolio />
      </Section>
      <Motion animation="fadeIn">
        <Section id="about" className="bg-[#fcfaf8]">
          <About />
        </Section>
      </Motion>
      <Motion animation="fadeIn">
        <Section id="testimonials" className="bg-[#f5f0e9]">
          <Testimonials />
        </Section>
      </Motion>
      <Motion animation="fadeIn">
        <Section id="contact" className="bg-[#fcfaf8]">
          <LastCall />
        </Section>
      </Motion>
    </div>
  );
}
