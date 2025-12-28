import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackIcons } from "../TechStackIcons/TechStackIcons";
import styles from "./TechStackCarousel.module.scss";

gsap.registerPlugin(ScrollTrigger);

const TechStackCarousel = () => {
  const carouselRef = useRef(null);
  const carouselIcons = [...techStackIcons, ...techStackIcons];

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const tween = gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      repeat: -1,
      duration: 45, 
      paused: true,
    });

    ScrollTrigger.create({
      trigger: el,
      onEnter: () => tween.play(),
      onLeave: () => tween.pause(),
      onEnterBack: () => tween.play(),
      onLeaveBack: () => tween.pause(),
    });

    return () => tween.kill();


  }, []);
  return (
    <div ref={carouselRef} className={styles["tech-stack-carousel-container"]}>
      {carouselIcons.map((icon, index) => (
        <div key={index} className={styles["svg-container"]} title={icon.name}>
          {icon.svg}
        </div>
      ))}
    </div>
  );
};

export default TechStackCarousel;
