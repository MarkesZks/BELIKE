import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Galeria from '../pages/Galeria';
import Contato from "../pages/Contato";
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/galeria"  component={Galeria} />
        <Route exact path="/contato"  component={Contato} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

