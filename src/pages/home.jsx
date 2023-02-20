import effects from "../static/css/effects.module.css";
import useTyper from "../hook/useTyper";
import bg from "../static/imgs/bg2.gif";
const Home = () => {
  const typerTitle = useTyper("Kiino-developer, CV", 80);
  const typerParagraph = useTyper(
    "Non deserunt et tempor eiusmod culpa commodo nisi aliquip nostrud cupidatat deserunt officia sunt laborum.",
    40,
    typerTitle
  );
  const styleCSS = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textTransform: "capitalize",
    backgroundImage: `url(${bg})`,
  };
  return (
    <div className={" bg-responsive"} style={styleCSS}>
      <h2 className={`${effects.shadow_ef} title grad-color`}>{typerTitle}</h2>
      {typerTitle[1] ? (
        <p className="typer owner-sender">{typerParagraph}</p>
      ) : undefined}
    </div>
  );
};

export default Home;
