import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Newsarea from './Components/Newsarea'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route key="/" exact path="/">
              <Newsarea category="general" />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <Newsarea category="entertainment" />
            </Route>
            <Route key="business" exact path="/business">
              <Newsarea category="business" />
            </Route>
            <Route key="health" exact path="/health">
              <Newsarea category="health" />
            </Route>
            <Route key="science" exact path="/science">
              <Newsarea category="science" />
            </Route>
            <Route key="sports" exact path="/sports">
              <Newsarea category="sports" />
            </Route>
            <Route key="technology" exact path="/technology">
              <Newsarea category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

