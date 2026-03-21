import React, { useEffect, useRef } from "react";
import styles from "./ContactListSection.module.scss";
import infoStyles from "../InfoListSection/InfoListSection.module.scss";
import ContactCard from "./ContactCard/ContactCard";
import ModelViewer from "./ModelViewer/ModelViewer";
import emailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

// contact data
const contactData = [
  { title: "Email", icon: emailIcon },
  { title: "Phone", icon: phoneIcon },
  { title: "LinkedIn", icon: linkedinIcon },
  { title: "GitHub", icon: githubIcon },
];

const ContactListSection = () => {
  // reference for ligthing card animation
  const cardRefs = useRef([]);

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
    <div id="contactlistsection" className={styles["content-section"]}>
      <div className={infoStyles["title-div"]}>
        <h1 className={infoStyles["title"]}>Contact</h1>
      </div>
      <div className={styles["main-content-section"]}>
        <div className={styles["model-section"]}>
          <ModelViewer />
        </div>
        <div className={styles["contact-list-section"]}>
          {/* loop contact data to generate contact data card */}
          {contactData.map((item, index) => (
            // contact data card
            <ContactCard
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactListSection;
