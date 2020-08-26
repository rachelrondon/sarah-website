import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar.js';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './landingpage';
import Gallery from './gallery';
import Collage from './collage';
import MixedMedia from './mixedmedia';
import OilPaintings from './oilpainting';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
        </Switch>
        <Switch>
          <Route path="/gallery" component={Gallery} exact />
        </Switch>
        <Switch>
          <Route path="/collage" component={Collage} exact />
        </Switch>
        <Switch>
          <Route path="/mixed-media" component={MixedMedia} exact />
        </Switch>
        <Switch>
          <Route path="/oil-paintings" component={OilPaintings} exact />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
