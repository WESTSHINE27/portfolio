import styles from "./IntroSection.module.scss";
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
    <div id="introsection" className={styles["content-section"]}>
      {/* intro text section */}
      <div className={styles["intro-text-container"]}>
        <section
          className={`${styles["intro-text-section"]} ${styles["relative-container"]}`}
        >
          {/* intro text placeholder */}
          {/* to reserve space for typing animation */}
          <h1
            className={`${styles["intro-text"]} ${styles["typing-text-placeholder"]}`}
          >
            {introText}
          </h1>
          {/* typing text */}
          <TypingIntro className={styles["intro-text"]} text={introText} />
        </section>
      </div>
      {/* pfp section */}

      <div className={styles["intro-pfp-container"]}>
        <PixelReveal src={pfp} />
      </div>
    </div>
  );
};

export default IntroSection;
