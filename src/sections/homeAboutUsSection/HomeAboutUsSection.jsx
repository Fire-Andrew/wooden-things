import React from "react";
import styles from "./HomeAboutUsSection.module.scss";

const HomeAboutUsSection = () => {
  return (
    <section className={`section ${styles.sectionAboutUs}`}>
      <div className="container">
        <h2 className={`sectionTitle ${styles.aboutUsTitle}`}>Про Нас</h2>
        <iframe
          className={styles.aboutUsVideo}
          // width="100%"
          // height="100%"
          src="https://drive.google.com/file/d/1dA1GyyLmHAgiXOOcOHaJppnmXqYnQBBW/preview"
          loading="lazy"
          title="ТУТ БУДЕ ВІДЕО"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <p className={styles.aboutUsText}>
          Зважаючи на велику кількість виробників{" "}
          <span className={styles.aboutUsAccent}>
            Ми приділяємо увагу якості
          </span>{" "}
          нашої продукції.
        </p>
        <p className={styles.aboutUsText}>
          Саме тому{" "}
          <span className={styles.aboutUsAccent}>
            100% наших виробів експортується{" "}
          </span>
          до Сполучених Штатів Америки, Великої Британії, Німеччини,
          Нідерландів, Данії та Франції.
        </p>
        <p className={styles.aboutUsText}>
          У виробничих процесах ми використовуємо{" "}
          <span className={styles.aboutUsAccent}>
            найсучасніші машини та обладнання
          </span>{" "}
          провідних світових виробників.
        </p>
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
