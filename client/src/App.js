import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {Main} from "./pages/Main"
import {NoMatchPage} from "./pages/NoMatch"
//import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </Router>
)

export default App;