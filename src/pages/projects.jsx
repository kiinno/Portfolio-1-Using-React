import React, { useEffect, useState } from "react";
import Section from "../components/section";
import bg from "../static/imgs/bg1.gif";
import styles from "../static/css/projects.module.css";
const Contact = () => {
  const [repos, setRepos] = useState([]);

  const API = "http://localhost:3010/repos";
  // const API = "https://api.github.com/users/elzerowebschool/repos";

  useEffect(() => {
    fetch(API, { method: "GET" })
      .then((reponse) => {
        reponse.json().then((data) => {
          setRepos(data);
        });
      })
      .catch((faildResponse) => {
        setRepos(
          "error from server faild to fetch repos, please check your connection..."
        );
      });
  }, []);

  return (
    <Section title="Projects :" bg={bg}>
      {typeof repos === "string" ? (
        <h5 style={{ color: "var(--secondary)" }}>{repos}</h5>
      ) : (
        <div className={styles.row}>
          {repos.map((repo) => {
            return (
              <div className={styles.col} key={repo.id}>
                <h4
                  className={styles.title}
                  title={repo.name.replaceAll("_", " ")}
                >
                  {repo.name.replaceAll("_", " ")}
                </h4>
                <p className={styles.description}>{repo.description}</p>
                <ul className={styles.info}>
                  <li>forks : {repo.forks}</li>
                  <li>stars : {repo.stargazers_count}</li>
                  <li>watchers : {repo.watchers_count}</li>
                </ul>
                <a
                  className={"btn"}
                  href={repo.html_url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Get
                </a>
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default Contact;
