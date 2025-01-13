"use client";
import React, { useEffect, useState } from "react";
import styles from "./Timeline.module.css";

const Main: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const items = document.querySelectorAll(`.${styles.timelineItem}`);
    const container = document.getElementById("timeline-1");
    if (!container || !items.length) return;

    const scrollPosition = window.scrollY;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;

      if (
        scrollPosition >= offsetTop - window.innerHeight / 2 &&
        scrollPosition < offsetTop + rect.height - window.innerHeight / 2
      ) {
        setActiveIndex(index);
        const bgImage = item.querySelector("img")?.getAttribute("src") || "";
        container.style.backgroundImage = `url(${bgImage})`;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.timelineHeader}>
        <h2 className={styles.timelineHeaderTitle}>PHÒNG TRUYỀN THỐNG</h2>
        <h3 className={styles.timelineHeaderSubtitle}>
          LIÊN CHI ĐOÀN KHOA CÔNG NGHỆ THÔNG TIN 1
        </h3>
      </div>
      <div className={styles.timelineContainer} id="timeline-1">
        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                activeIndex === index ? styles.timelineItemActive : ""
              }`}
              data-text={item.year}
            >
              <div className={styles.timelineContent}>
                <img
                  className={styles.timelineImg}
                  src={item.image}
                  alt={`Image for ${item.year}`}
                />
                <h2 className={styles.timelineContentTitle}>{item.year}</h2>
                <p className={styles.timelineContentDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const timelineData = [
  {
    year: "2013",
    image: "phongtruyenthong/anhthumlb.svg",
    description:
      "Thành lập Liên chi Đoàn Khoa CNTT1 (Information Technology Information Security)",
  },
  {
    year: "2023",
    image: "anh1.jpg",
    description: "HOURGLASS - NGÀY TRỞ VỀ (KỶ NIỆM 10 NĂM THÀNH LẬP)",
  },
  {
    year: "2025",
    image: "phongtruyenthong/2025.svg",
    description: "HIỆN NAY ... ",
  },
];

export default Main;
