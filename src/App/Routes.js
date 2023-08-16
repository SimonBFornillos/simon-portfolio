import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../Router/withRouter";
import { Home } from "../Pages/Home/";
import { Projects } from "../Pages/Projects";
import { Contact } from  "../Pages/Contact";
import { Skills } from "../Pages/Skills";
import { Socialicons } from "../Components/SocialIcons";
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
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
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
  