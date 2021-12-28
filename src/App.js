import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Newsarea from './Components/Newsarea'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light'
    }
  }

  changeTheme = () => {
    if(this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      document.body.style.backgroundColor = '#181818';
    }
    else {
      this.setState({ theme: 'light' });
      document.body.style.backgroundColor = '#fff';
    }
  }

  render() {
    return (
      <>
        <Router>
          <Navbar theme={this.state.theme} switchThemeProp={this.changeTheme} />
          <Switch>
            <Route key="/" exact path="/">
              <Newsarea theme={this.state.theme} category="general" />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <Newsarea theme={this.state.theme} category="entertainment" />
            </Route>
            <Route key="business" exact path="/business">
              <Newsarea theme={this.state.theme} category="business" />
            </Route>
            <Route key="health" exact path="/health">
              <Newsarea theme={this.state.theme} category="health" />
            </Route>
            <Route key="science" exact path="/science">
              <Newsarea theme={this.state.theme} category="science" />
            </Route>
            <Route key="sports" exact path="/sports">
              <Newsarea theme={this.state.theme} category="sports" />
            </Route>
            <Route key="technology" exact path="/technology">
              <Newsarea theme={this.state.theme} category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

