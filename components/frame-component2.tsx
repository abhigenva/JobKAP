import type { NextPage } from "next";
import VariantFrame from "./variant-frame";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.jobTitleLocationWrapper}>
      <div className={styles.jobTitleLocation}>
        <div className={styles.frameParent}>
          <VariantFrame />
          <div className={styles.yourPathToCareerSuccess}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.jobTitleLocationInner}>
          <button className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.search}>Search</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
