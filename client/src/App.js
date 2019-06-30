import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <Router>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Jumbotron />
        </div>
        <div>
          <SearchForm />
        </div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
