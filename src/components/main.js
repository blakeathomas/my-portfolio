import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import landingpage from "./landingpage";
import aboutme from "./aboutme";
import contact from "./contact";
import projects from "./projects";
import resume from "./resume";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/landingpage" component={landingpage} />
      <Route path="/aboutme" component={aboutme} />
      <Route path="/contact" component={contact} />
      <Route path="/projects" component={projects} />
      <Route path="/resume" component={resume} />
    </Switch>
  </BrowserRouter>
);

export default Main;
