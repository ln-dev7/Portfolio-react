import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Livinnow, MusicPlayer, SiteCook, ZShop, CardHoverEffect, SiteSante } from "./pages/Projects";
import Propos from "./pages/Propos";

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/a-propos" component={Propos} />
      <Route exact path="/livinnow" component={Livinnow} />
      <Route exact path="/music-player" component={MusicPlayer} />
      <Route exact path="/site-cook" component={SiteCook} />
      <Route exact path="/z-shop" component={ZShop} />
      <Route exact path="/card-hover-effect" component={CardHoverEffect} />
      <Route exact path="/site-sante" component={SiteSante} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
