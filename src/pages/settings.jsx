import ColorVariableChanger from "../components/css-variable-field";
import Section from "../components/section";
import bg from "../static/imgs/bg4.gif";
import { resetSettings } from "../_storage";
const Settings = () => {
  return (
    <Section title="change settings:" bg={bg}>
      <div style={{ paddingTop: "1rem" }}>
        <ColorVariableChanger variable={"gradiant-c1"} />
        <ColorVariableChanger variable={"gradiant-c2"} />
        <ColorVariableChanger variable={"gradiant-c3"} />

        <ColorVariableChanger variable={"primary"} />
        <ColorVariableChanger variable={"secondary"} />
        <ColorVariableChanger variable={"light"} />
        <ColorVariableChanger variable={"overlay"} />
        <button onClick={resetSettings} className={"btn"}>
          reset defualt
        </button>
      </div>
    </Section>
  );
};

export default Settings;
