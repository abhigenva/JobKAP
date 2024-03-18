import type { NextPage } from "next";
import styles from "./group-component.module.css";

const GroupComponent: NextPage = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.seniorSoftwareEngineerWrapper}>
          <div className={styles.seniorSoftwareEngineer}>
            Senior Software Engineer
          </div>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Elementum pharetra sagittis
          duis ac at elit turpis nunc.
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.knowMore}>Know More</div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
