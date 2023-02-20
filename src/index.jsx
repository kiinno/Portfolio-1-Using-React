import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./static/css/global.css";
import "./static/css/normalize.css";
import "./static/css/all.min.css";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
