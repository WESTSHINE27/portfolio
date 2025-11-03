import React from "react";
import styles from "./WorkDataCard.module.scss";

const WorkDataCard = React.forwardRef(({ title, number }, ref) => {
  return (
    <div ref={ref} className={styles["work-data-card-outer-layer"]}>
      <div className={styles["work-data-card-inner-layer"]}>
        <div className={styles["card-title-container"]}>
          <p className={styles["card-title"]}>{title}</p>
        </div>
        <div className={styles["card-number-container"]}>
          <p className={styles["card-number"]}>{number}</p>
        </div>
      </div>
    </div>
  );
});

export default WorkDataCard;
