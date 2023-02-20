import React from "react";
import ProgressBar from "../components/progress";
import styles from "../static/css/skills.module.css";
import Section from "../components/section";
import bg from "../static/imgs/bg5.gif";

const Skills = () => {
  return (
    <Section title="kiinno skills :" bg={bg}>
      <div className={styles.grid_box}>
        <ProgressBar>
          <ProgressBar.Progress title="html" percent={100} />
          <ProgressBar.Progress title="css" percent={85} />
          <ProgressBar.Progress title="javascript" percent={76} />
          <ProgressBar.Progress title="jquery" percent={33} />
          <ProgressBar.Progress
            title="bootstrap & react bootstrap"
            percent={76}
          />
          <ProgressBar.Progress title="sass" percent={88} />
          <ProgressBar.Progress title="react" percent={87} />
          <ProgressBar.Progress title="matrial ui" percent={42} />
        </ProgressBar>
        <ProgressBar>
          <ProgressBar.Progress title="php" percent={45} />
          <ProgressBar.Progress title="django" percent={56} />
          <ProgressBar.Progress title="mysql" percent={66} />
          <ProgressBar.Progress title="sqlite" percent={77} />
          <ProgressBar.Progress title="mongodb" percent={55} />
        </ProgressBar>
      </div>
    </Section>
  );
};

export default Skills;
