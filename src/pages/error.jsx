import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import styles from "../static/css/error.module.css";
const Error = () => {
  const routeErrors = useRouteError();
  const navigate = useNavigate();
  return (
    <div className={styles.err_container}>
      <h3 className={styles.err_title}>
        {routeErrors.statusText || routeErrors.name} {routeErrors?.status}
      </h3>
      <p className={styles.err_msg}>
        {routeErrors.data || routeErrors.message}{" "}
      </p>
      <button
        className={styles.back_button}
        onClick={() => navigate("/", { replace: true })}
      >
        Back!
      </button>
    </div>
  );
};

export default Error;
