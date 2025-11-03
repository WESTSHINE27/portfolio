import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkDataCard from "./WorkDataCard/WorkDataCard";
import styles from "./WorkDataSection.module.scss";

// register plug in 
// run the animation when we scroll and see it 
gsap.registerPlugin(ScrollTrigger);

// work data 
const workData = [
  { title: "Years of experience", number: 1 },
  { title: "Companies worked for", number: 2 },
  { title: "Team projects participated in", number: 4 },
  { title: "Freelance projects completed", number: 1 },
];

const WorkDataSection = () => {
  // reference for number animation
  const numberRefs = useRef([]);
  // reference for ligthing card animation
  const cardRefs = useRef([]);

  // Animate numbers on scroll
  useEffect(() => {
    // for each of the number inside the numberRefs []
    numberRefs.current.forEach((el, index) => {
      // if no data to loop then return
      if (!el) return;

      // gsap animation
      gsap.fromTo(
        el,
        // from animation  
        { innerText: 0 },
        // to animation
        {
          innerText: workData[index].number,
          duration: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          // screen update every +1
          snap: { innerText: 1 },
          // calculate function to update the number +1 every time with the floor
          onUpdate: function () {
            el.textContent = Math.floor(el.innerText);
          },
        }
      );
    });
  }, []);

  // global mousemove listener for lighting animation effect to all work data card
  useEffect(() => {
    // set the ticking to lock the function 
    // only run the function when previoud requestAnimationFrame is finish
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        // use requestAnimationFrame to ensure prevent unnecessary calculation
        // run this function every 60ms
        window.requestAnimationFrame(() => {
          cardRefs.current.forEach((card) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            // calculate x and y 
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // assign x and y as a property to the card 
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    // add mouse move event listener 
    window.addEventListener("mousemove", handleMouseMove);
    // remove mouse move event listener when the component unmouted
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles["content-section"]}>
      {/* work data card section  */}
      <div className={styles["work-data-grid-container"]}>
        {/* loop work data to generate work data card */}
        {workData.map((item, index) => (
          // work data card 
          <WorkDataCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            title={item.title}
            number={
              <span ref={(el) => (numberRefs.current[index] = el)}>0</span>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WorkDataSection;
