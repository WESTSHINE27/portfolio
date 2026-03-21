import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../InfoListSection/InfoListSection.module.scss";
import InfoTitle from "../InfoListSection/InfoTitle/InfoTitle.jsx";
import antImage from "../../assets/imgs/ant.jpeg";

const ExperienceListSection = () => {
  const sectionRef = useRef(null);
  const innerContentRef = useRef(null);
  const detailRef1 = useRef(null);
  const detailRef2 = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsShowMore, setNeedsShowMore] = useState(false);

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
      id="experiencelistsection"
      ref={sectionRef}
      className={`${styles["content-section"]} ${!isExpanded ? styles["collapsed"] : ""}`}
    >
      <div ref={innerContentRef} className={styles["inner-wrapper"]}>
        <div className={styles["title-div"]}>
          <h1 className={styles["title"]}>Experience</h1>
        </div>

        <InfoTitle
          title="Java Software Engineer"
          subtitle="Ant International"
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
                src={antImage}
                alt="Image with Ant International's colleague and office background"
              />
            </figure>
            <figcaption>Ysabell Tan influencer landing page</figcaption>
          </article>
        </div>

        <InfoTitle
          title="Software Engineer"
          subtitle="E-Group Solution Sdn. Bhd."
          onClick={() => toggleDetail(2, detailRef2)}
        />
        <div
          ref={detailRef2}
          className={styles["detail-div"]}
          style={{ height: 0, overflow: "hidden" }}
        >
          <article className={styles["detail-content"]}>
            <figcaption>
              This internship was completed as part of my Diploma program and
              served as my first professional experience in the IT industry.
              During this period, I was exposed to real-world IT operations,
              including system maintenance, infrastructure setup, and technical
              support. I gained hands-on experience working with servers, POS
              systems, and company backup infrastructure while assisting the IT
              team in maintaining reliable and efficient daily operations.
            </figcaption>
            <br/>
            <p><b>Key Contributions: </b></p>
            <ul>
              <li>Upgraded the company’s traditional manual backup process to an <b>automated daily backup system</b>, improving time efficiency while enhancing data reliability and security.</li>
              <li>Installed and configured <b>servers and POS machines</b>, helping streamline the deployment process and ensuring stable system performance.</li>
              <li>Assisted with <b>IT infrastructure setup, troubleshooting, and maintenance</b>, supporting the team in resolving technical issues and maintaining smooth business operations.</li>
            </ul>
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

export default ExperienceListSection;
