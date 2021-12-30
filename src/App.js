import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Newsarea from './Components/Newsarea'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
      progress: 0,
      displayAsList: true
    }
  }

  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      document.body.style.backgroundColor = '#181818';
    }
    else {
      this.setState({ theme: 'light' });
      document.body.style.backgroundColor = '#fff';
    }
  }

  changeDisplay = () => {
    if (this.state.displayAsList) {
      this.setState({ displayAsList: false });
    }
    else {
      this.setState({ displayAsList: true });
    }
  }

  handleProgressChange = (value) => {
    this.setState({progress: value});
  }

  render() {
    return (
      <>
      <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <Router>
          <Navbar changeDisplay={this.changeDisplay} displayAsList={this.state.displayAsList} theme={this.state.theme} switchThemeProp={this.changeTheme} />
          <Switch>
            <Route key="/" exact path="/">
              <Newsarea displayAsList={this.state.displayAsList} changeDisplay={this.changeDisplay} setProgress={this.handleProgressChange} theme={this.state.theme} category="general" />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="entertainment" />
            </Route>
            <Route key="business" exact path="/business">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="business" />
            </Route>
            <Route key="health" exact path="/health">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="health" />
            </Route>
            <Route key="science" exact path="/science">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="science" />
            </Route>
            <Route key="sports" exact path="/sports">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="sports" />
            </Route>
            <Route key="technology" exact path="/technology">
              <Newsarea displayAsList={this.state.displayAsList} setProgress={this.handleProgressChange} theme={this.state.theme} category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

