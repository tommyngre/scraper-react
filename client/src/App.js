import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {Scraper} from "./pages/Scraper"
import {NoMatchPage} from "./pages/NoMatch"
//import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Scraper} />
        {/* <Route exact path="/scrape" component={Scraper} />
        <Route exact path="/api" component={Scraper} /> */}
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </Router>
)

export default App;