import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import styles from "./desktop.module.css";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop2}>
      <FrameComponent1 />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <FrameComponent />
        <section className={styles.frameParent}>
          <GroupComponent1 />
          <GroupComponent1 />
          <GroupComponent />
        </section>
      </main>
    </div>
  );
};

export default Desktop;
