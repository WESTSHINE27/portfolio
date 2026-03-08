import React from "react";
import styles from "./ContactCard.module.scss";

const ContactCard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles["work-data-card-outer-layer"]}>
      <div className={styles["work-data-card-inner-layer"]}>
        {props.title}
      </div>
    </div>
  );
});

export default ContactCard;
