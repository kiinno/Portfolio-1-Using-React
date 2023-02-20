import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../static/css/layout.module.css";
import effects from "../static/css/effects.module.css";
import { loadSettings } from "../_storage";

const Layout = () => {
  loadSettings();
  return (
    <div className={styles.workflow}>
      <Outlet />
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-house-user"></i>
              <p className={styles.link_title}>home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="creator"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-user"></i>
              <p className={styles.link_title}>creator</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-lightbulb"></i>
              <p className={styles.link_title}>skills</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-star"></i>
              <p className={styles.link_title}>projects</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-gear"></i>
              <p className={styles.link_title}>settings</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gift"
              className={({ isActive }) =>
                isActive === true
                  ? `${styles.active} ${effects.text_color_ef}`
                  : undefined
              }
            >
              <i className="fa-solid fa-gift"></i>
              <p className={styles.link_title}>free gift</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
