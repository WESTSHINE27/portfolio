import "./IntroSection.scss";
import PixelReveal from "./PixelRevealImage/PixelRevealImage";
import pfp from "../../assets/imgs/pfp.png";
import TypingIntro from "./TypingIntro/TypingIntro";

const introText = `Sup, I’m Sam.
Full name’s Tan Wei Siang,
and I’m a Software Engineer.
Nothing’s impossible
— just learn, do, and improve.`;
const IntroSection = () => {
  return (
    <div className="intro-section">
      {/* intro text section */}
      <div className="intro-text-container">
        <section className="intro-text-section relative-container">
          {/* intro text placeholder */}
          {/* to reserve space for typing animation */}
          <h1 className="intro-text typing-text-placeholder">{introText}</h1>
          {/* typing text */}
          <TypingIntro className="intro-text" text={introText} />
        </section>
      </div>
      {/* pfp section */}
      <div className="intro-pfp-container bbh-sans-bogle-regular ">
        <PixelReveal src={pfp} />
      </div>
    </div>
  );
};

export default IntroSection;
