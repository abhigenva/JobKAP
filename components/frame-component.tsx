import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.fullStack}>Full Stack</div>
        </button>
        <div className={styles.frameContainer}>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frontEnd}>Front-end</div>
          </button>
        </div>
        <button className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.backEnd}>Back-end</div>
        </button>
        <button className={styles.frameButton}>
          <div className={styles.rectangleDiv} />
          <div className={styles.other}>Other</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
