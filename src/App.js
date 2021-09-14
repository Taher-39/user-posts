import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/posts/:id'>
          <PostDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
