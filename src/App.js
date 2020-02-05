import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Importing Bootstrap and App.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Importing Components
import CreateTodo from "./components/create-toDo";
import EditTodo from "./components/edit-toDo";
import TodosList from "./components/toDos-list";
//Importing Resources used 
import logo from "./icon.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo}
                width="30"
                height="30"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              NiyoTail
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
