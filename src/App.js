import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory, Redirect } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Livinnow, MusicPlayer, SiteCook, ZShop, CardHoverEffect, SiteSante } from "./pages/Projects";
import Propos from "./pages/Propos";
import { AnimatePresence }from "framer-motion";

const App = () => {

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
       const url = window.location.origin + '/';

       const wheelRouter = (after, before) => {
         if (e.wheelDeltaY < 0){
          setTimeout(() => {
            history.push(before)
           }, 500)
         } else if (e.wheelDeltaY > 0){
          setTimeout(() => {
            history.push(after)
           }, 500)
         }
       }

       switch (window.location.href.toString()) {
         case url:
           if (e.wheelDeltaY > 0){
             setTimeout(() => {
              history.push('livinnow')
             }, 500)
           }
          break;
          case url + 'a-propos':
           wheelRouter('', 'livinnow')
          break;
          case url + 'livinnow':
           wheelRouter('music-player', 'a-propos')
          break;
          case url + 'music-player':
           wheelRouter('site-cook', 'livinnow')
          break;
          case url + 'site-cook':
           wheelRouter('z-shop', 'music-player')
          break;
          case url + 'z-shop':
           wheelRouter('card-hover-effect', 'site-cook')
          break;
          case url + 'card-hover-effect':
           wheelRouter('site-sante', 'z-shop')
          break;
          case url + 'site-sante':
           wheelRouter('contact', 'card-hover-effect')
          break;
          case url + 'contact':
           if (e.wheelDeltaY < 0){
             setTimeout(() => {
              history.push('site-sante')
             }, 500)
           }
          break;
        default:
          //
       }
    };
    window.addEventListener('wheel', handleScrollToElement);
  }, [history])

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default App;
