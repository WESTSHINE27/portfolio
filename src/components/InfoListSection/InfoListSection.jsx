import styles from "./InfoListSection.module.scss";
import InfoTitle from "./InfoTitle/InfoTitle.jsx";
import ysabellLandingPagePreview from "../../assets/imgs/ysabell-landing-page-preview.png";

const InfoListSection = () => {
  return (
    <div className={styles["content-section"]}>
      <h1 className={styles["title"]}>Project</h1>
      <InfoTitle
        title="Landing Page for Influencer Ysabell Tan"
        subtitle="Web Development"
      />
      <div className={styles["detail-div"]}>
        <div className={styles["detail-content"]}>
          <img className={styles["project-pic"]} loading="lazy" src={ysabellLandingPagePreview} alt="Ysabell Tan Landing Page Preview"/>
        </div>
      </div>
    </div>
  );
};

export default InfoListSection;
