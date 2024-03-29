import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/projets";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/services";
import { Mentions } from "../pages/mentions_legales";
import { Plan } from "../pages/plan_site";
import { Error } from "../pages/error";

import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<About />} />
        <Route path="/projets" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mentions_legales" element={<Mentions/>} />
        <Route path="/plan_site" element={<Plan/>} />
        <Route path="*" element={<Error />} />
         
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {

  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
