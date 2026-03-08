import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../InfoListSection/InfoListSection.module.scss";
import InfoTitle from "../InfoListSection/InfoTitle/InfoTitle.jsx";
import ysabellLandingPagePreview from "../../assets/imgs/ysabell-landing-page-preview.png";

const ProjectListSection = () => {
  const sectionRef = useRef(null);
  const innerContentRef = useRef(null);
  const detailRef1 = useRef(null);

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
      [detailRef1].forEach((r) => {
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
      ref={sectionRef}
      className={`${styles["content-section"]} ${!isExpanded ? styles["collapsed"] : ""}`}
    >
      <div ref={innerContentRef} className={styles["inner-wrapper"]}>
        <div className={styles["title-div"]}>
          <h1 className={styles["title"]}>Project</h1>
        </div>

        <InfoTitle
          title="Landing Page for Influencer Ysabell Tan"
          subtitle="Web Development"
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
            <figcaption>
              <h1>Influencer Landing Page</h1>
              <h2>Project Overview</h2>Designed and developed a modern,
              high-performance landing page for the influencer Ysabell, focusing
              on smooth animations, engaging user experience, and optimized
              content loading. The goal was to create a visually impactful page
              that enhances personal branding and improves user engagement.
              <br></br>
              <br></br>
              Click here to view the page:
              <a
                href="https://www.ysabell-tan.com/"
                target="_blank"
                rel="landing page link"
                className={styles["link"]}
              >
                Link
              </a>
            </figcaption>
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

export default ProjectListSection;
