import { lazy } from "solid-js";
import { Router, Routes, Route } from "solid-app-router";

import Nav from "./components/Nav";

const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));
const NotFound = lazy(() => import("./views/NotFound"));

// const routes = [
//   {
//     path: "/",
//     component: lazy(() => import("./views/Home")),
//   },
//   {
//     path: "/about",
//     component: lazy(() => import("./views/About")),
//   },
//   {
//     path: "*all",
//     component: lazy(() => import("./views/NotFound")),
//   },
// ];

const App = () => {
  return (
    // <Router routes={routes}>
    //   <Nav />
    //   <Route />
    // </Router>

    <Router>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*all" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
