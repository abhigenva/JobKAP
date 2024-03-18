import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import styles from "./desktop1.module.css";

const Desktop1: NextPage = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent1 />
      <main className={styles.pathToCareerSuccessTitle}>
        <img
          className={styles.variantStandingmalePeepSta}
          loading="lazy"
          alt=""
          src="/variant-standingmale-peep-standing-23.svg"
        />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <FrameComponent2 />
          <h2 className={styles.yourPathTo}>Your Path to Career Success</h2>
        </section>
      </main>
    </div>
  );
};

export default Desktop1;
