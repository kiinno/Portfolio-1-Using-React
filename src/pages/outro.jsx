import React from "react";
import styles from "../static/css/outro.module.css";
import Section from "../components/section";
import bg from "../static/imgs/bg6.gif";
import useTyper from "../hook/useTyper";
import effects from "../static/css/effects.module.css";
const Outro = () => {
  const outroTyper = useTyper(
    `
      this projects is for free, source code in github. 
    `,
    30
  );
  return (
    <div
      className={styles.outro + " bg-responsive"}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2
        style={{ margin: "0", textAlign: "initial" }}
        className={`${effects.shadow_ef} title grad-color`}
      >
        that's for you!
      </h2>
      <p className={styles.message + " typer owner-sender"}>
        {outroTyper[0]} <i class="fa-solid fa-gift"></i>
      </p>
      {outroTyper[1] ? (
        <a
          className={"btn"}
          href="https://github.com/kiinno/Portfolio-1-Using-React"
          target={"_blank"}
          rel="noreferrer"
        >
          Visit github
        </a>
      ) : undefined}
    </div>
  );
};

export default Outro;
