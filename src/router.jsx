import { createBrowserRouter } from "react-router-dom";
import Creator from "./pages/creator";
import Error from "./pages/error";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Outro from "./pages/outro";
import Projects from "./pages/projects";
import Settings from "./pages/settings";
import Skills from "./pages/skills";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, //
      { path: "projects", element: <Projects /> }, //
      { path: "settings", element: <Settings /> },
      { path: "creator", element: <Creator /> },
      { path: "skills", element: <Skills /> }, //
      { path: "gift", element: <Outro /> }, //
    ],
  },
]);
