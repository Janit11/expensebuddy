import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import ExpenseList from "./components/ExpenseList"
import Login from "./components/Login"
import './App.css';

function App(){
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route path = "/" exact Component={Dashboard} />
        <Route path = "/expenses" exact Component={ExpenseList} />
        <Route path = "/login" exact Component={Login} />
        <Route path = "/navbar" exact Component={NavBar} />
      </Switch>
    </Router>

  );
}

export default App;
