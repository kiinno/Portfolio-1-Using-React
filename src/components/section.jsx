import React from "react";
import useTyper from "../hook/useTyper";
import styles from "../static/css/section.module.css";
import effects from "../static/css/effects.module.css";

const Section = ({ children, title = "", bg, duration = 30 }) => {
  const titleTyper = useTyper(title, duration);
  return (
    <div
      className={styles.section + " bg-responsive"}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className={`${effects.shadow_ef} title grad-color ${styles.title}`}>
        {titleTyper}
      </h2>
      {titleTyper[1] ? children : undefined}
    </div>
  );
};

export default Section;
