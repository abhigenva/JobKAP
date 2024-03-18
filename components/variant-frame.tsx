import type { NextPage } from "next";
import styles from "./variant-frame.module.css";

const VariantFrame: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.jobTitleParent}>
        <div className={styles.jobTitle}>Job Title</div>
        <div className={styles.location}>Location</div>
      </div>
    </div>
  );
};

export default VariantFrame;
