import React from "react";
import { Route, Switch } from "react-router-dom";
import landingPage from "./landingpage";
import Projects from  "./projects";


const Main = () => (
    <Switch>
    <Route exact path="/" component={landingPage}  />
    <Route path="/landingpage" component={landingPage} />
    <Route path="/projects" component={Projects}  />
    
</Switch>
)
export default Main;