import React, { Component } from "react";
import "./styles/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Press from "./components/Press";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
 
class App extends Component { 
  render() {
    return (
      <BrowserRouter >
        <div>
          <Hero />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/gallery'} component={Gallery} />
            <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
            <Route exact path={process.env.PUBLIC_URL + '/press'} component={Press} />
            <Route exact path={process.env.PUBLIC_URL + '*'} component={ErrorPage} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
