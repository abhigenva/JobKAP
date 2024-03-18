import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <header className={styles.desktop2Inner}>
      <div className={styles.jobkapParent}>
        <h1 className={styles.jobkap}>JobKAP</h1>
        <div className={styles.knowledgeAttitudePracticeWrapper}>
          <div className={styles.knowledgeAttitudePractice}>
            Knowledge Attitude Practice
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
