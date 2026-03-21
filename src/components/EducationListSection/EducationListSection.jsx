import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../InfoListSection/InfoListSection.module.scss";
import InfoTitle from "../InfoListSection/InfoTitle/InfoTitle.jsx";
import ysabellLandingPagePreview from "../../assets/imgs/ysabell-landing-page-preview.png";

const EducationListSection = () => {
  const sectionRef = useRef(null);
  const innerContentRef = useRef(null);
  const detailRef1 = useRef(null);
  const detailRef2 = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsShowMore, setNeedsShowMore] = useState(false);

  // Check if content is taller than viewport
  useEffect(() => {
    const checkHeight = () => {
      if (innerContentRef.current) {
        const contentHeight = innerContentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        setNeedsShowMore(contentHeight > viewportHeight);
      }
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  const handleShowMore = () => {
    setIsExpanded(true);
    gsap.to(sectionRef.current, {
      maxHeight: "none", // Remove the cap
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const toggleDetail = (index, ref) => {
    if (openIndex === index) {
      gsap.to(ref.current, {
        height: 0,
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      setOpenIndex(null);
    } else {
      [detailRef1, detailRef2].forEach((r) => {
        if (r.current) gsap.set(r.current, { height: 0, opacity: 0 });
      });

      gsap.fromTo(
        ref.current,
        { height: 0, y: -10, opacity: 0 },
        { height: "auto", y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );
      setOpenIndex(index);
    }
  };

  return (
    <div
      id="educationlistsection"
      ref={sectionRef}
      className={`${styles["content-section"]} ${styles["second-content-section"]} ${!isExpanded ? styles["collapsed"] : ""}`}
    >
      <div ref={innerContentRef} className={styles["inner-wrapper"]}>
        <div className={styles["title-div"]}>
          <h1 className={styles["title"]}>Education</h1>
        </div>

        <InfoTitle
          title="Tunku Abdul Rahman University of Management and Technology (TAR UMT)"
          subtitle="Bachelor's degree, Information Technology"
          onClick={() => toggleDetail(1, detailRef1)}
        />
        <div
          ref={detailRef1}
          className={styles["detail-div"]}
          style={{ height: 0, overflow: "hidden" }}
        >
          <article className={styles["detail-content"]}>
            <figure>
              <img
                className={styles["project-pic"]}
                src={ysabellLandingPagePreview}
                alt="Preview"
              />
            </figure>
            <figcaption>Ysabell Tan influencer landing page</figcaption>
          </article>
        </div>

        <InfoTitle
          title="Tunku Abdul Rahman University of Management and Technology (TAR UMT)"
          subtitle="Diploma in Information Technology"
          onClick={() => toggleDetail(2, detailRef2)}
        />
        <div
          ref={detailRef2}
          className={styles["detail-div"]}
          style={{ height: 0, overflow: "hidden" }}
        >
          <article className={styles["detail-content"]}>
            <figure>
              <img
                className={styles["project-pic"]}
                src={ysabellLandingPagePreview}
                alt="Preview"
              />
            </figure>
            <figcaption>Another project description here</figcaption>
          </article>
        </div>
      </div>

      {needsShowMore && !isExpanded && (
        <div className={styles["show-more-overlay"]}>
          <button className={styles["show-more-btn"]} onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationListSection;
