import React from "react";
import styles from "../static/css/progress.module.css";
import effects from "../static/css/effects.module.css";

const Progress = ({ title, percent }) => {
  return (
    <div className={styles.progress}>
      <h4 className={styles.p_title}>{title}</h4>
      <div className={styles.p_block} data-percent={percent}>
        <div
          className={`${styles.p_indecator} ${effects.full_width_ef}`}
          style={{ maxWidth: percent + "%" }}
        >
          <div className={styles.p_details}>%{percent}</div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ children }) => {
  return <div className={styles.progress_wrapper}>{children}</div>;
};

ProgressBar.Progress = Progress;

export default ProgressBar;
