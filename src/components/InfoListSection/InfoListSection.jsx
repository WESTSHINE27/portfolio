import styles from "./InfoListSection.module.scss";
import InfoTitle from "./InfoTitle/InfoTitle.jsx";
import ysabellLandingPagePreview from "../../assets/imgs/ysabell-landing-page-preview.png";

const InfoListSection = () => {
  return (
    <div className={styles["content-section"]}>
      <div className={styles["title-div"]}>
        <h1 className={styles["title"]}>Project</h1>
      </div>
      <InfoTitle
        title="Landing Page for Influencer Ysabell Tan"
        subtitle="Web Development"
      />
      <div className={styles["detail-div"]}>
        <article className={styles["detail-content"]}>
          <figure>
            <img
              className={styles["project-pic"]}
              loading="lazy"
              src={ysabellLandingPagePreview}
              alt="Ysabell Tan Landing Page Preview"
            />
          </figure>
          {/* <figcaption className={styles[""]}>
            Ysabell Tan influencer landing page web development project
          </figcaption> */}
        </article>
      </div>
    </div>
  );
};

export default InfoListSection;
