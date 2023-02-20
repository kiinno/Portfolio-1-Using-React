import React from "react";
import styles from "../static/css/color-changer.module.css";
const ColorVariableChanger = ({ from, variable }) => {
  from = from ?? document.documentElement;
  variable = !variable
    ? variable
    : variable.startsWith("--")
    ? variable
    : `--${variable}`;
  const storage = window.localStorage;
  const handleChange = (ev) => {
    if (variable) {
      from.style.setProperty(variable, ev.target.value);
      storage.setItem(`css_${variable}`, ev.target.value);
    }
  };
  return (
    <label htmlFor={`var-${variable}`} className={styles.changer}>
      <span
        className={styles.def_rad}
        style={{
          backgroundColor: `var(${variable})`,
        }}
      >
        <input
          id={`var-${variable}`}
          type="color"
          onChange={handleChange}
          value={getComputedStyle(from).getPropertyValue(variable).trim()}
        />
      </span>
      <span className={styles.var_title}>Variable {variable}</span>
    </label>
  );
};

export default ColorVariableChanger;
