import React from "react";
import styles from "./InfoTitle.module.scss";

const InfoTitle = ({ title, subtitle, onClick }) => {
  return (
    <div className={styles["content-section"]} onClick={onClick}>
      <h2>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default InfoTitle;
