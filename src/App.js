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
      progress: 0
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

  handleProgressChange = (value) => {
    this.setState({progress: value});
    console.log("Progress set to", value);
  }

  render() {
    return (
      <>
      <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <Router>
          <Navbar theme={this.state.theme} switchThemeProp={this.changeTheme} />
          <Switch>
            <Route key="/" exact path="/">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="general" />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="entertainment" />
            </Route>
            <Route key="business" exact path="/business">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="business" />
            </Route>
            <Route key="health" exact path="/health">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="health" />
            </Route>
            <Route key="science" exact path="/science">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="science" />
            </Route>
            <Route key="sports" exact path="/sports">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="sports" />
            </Route>
            <Route key="technology" exact path="/technology">
              <Newsarea setProgress={this.handleProgressChange} theme={this.state.theme} category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

