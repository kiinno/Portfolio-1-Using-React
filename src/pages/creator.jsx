import React from "react";
import Section from "../components/section";
import bg from "../static/imgs/bg3.gif";
import SoftSkillsAnimateSVG from "../svg/soft-skills-animate/soft-skills-animate";
import styles from "../static/css/creator.module.css";
const Creator = () => {
  return (
    <Section title="Creator Informations :" bg={bg}>
      <div className={styles.row}>
        <div>
          <h1>Kiinno developer</h1>
          <ol>
            <li>creative</li>
            <li>four years experiance</li>
            <li>speaking english & arabic</li>
            <li>no work history</li>
            <li>lived in egypt</li>
          </ol>

          <ol start={6}>
            <li>creative</li>
            <li>four years experiance</li>
            <li>speaking english & arabic</li>
            <li>no work history</li>
            <li>lived in egypt</li>
          </ol>
        </div>
        <div className={styles.svg}>
          <SoftSkillsAnimateSVG />
        </div>
      </div>
    </Section>
  );
};

export default Creator;
