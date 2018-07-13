import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Scraper from "./pages/Scraper"
import logo from "./logo.svg";
import "./App.css";

const App = () => (
      <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
        <Route exact path="/" component={Scraper} />
        <Route component={Scraper} />
        </Switch>
      </div>
    </Router>
)

export default App;