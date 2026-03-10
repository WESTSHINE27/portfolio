import React from "react";
import styles from "./ContactCard.module.scss";

const ContactCard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles["work-data-card-outer-layer"]}>
      <div className={styles["work-data-card-inner-layer"]}>
        <img src={props.icon} alt={props.title} className={styles["icon"]}/>
        <h3 className={styles["contact-title"]}>{props.title}</h3>
      </div>
    </div>
  );
});

export default ContactCard;
