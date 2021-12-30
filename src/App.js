import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsarea from './Components/Newsarea'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const [theme, setTheme] = useState('light');
  const [progress, setProgress] = useState(0);
  const [displayAsList, setDisplayAsList] = useState(true);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#181818';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  const changeDisplay = () => {
    if (displayAsList) {
      setDisplayAsList(false);
    }
    else {
      setDisplayAsList(true);
    }
  }

  const handleProgressChange = (value) => {
    setProgress(value);
  }

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
      />
      <Router>
        <Navbar changeDisplay={changeDisplay} displayAsList={displayAsList} theme={theme} switchThemeProp={changeTheme} />
        <Switch>
          <Route key="/" exact path="/">
            <Newsarea displayAsList={displayAsList} changeDisplay={changeDisplay} setProgress={handleProgressChange} theme={theme} category="general" />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="entertainment" />
          </Route>
          <Route key="business" exact path="/business">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="business" />
          </Route>
          <Route key="health" exact path="/health">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="health" />
          </Route>
          <Route key="science" exact path="/science">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="science" />
          </Route>
          <Route key="sports" exact path="/sports">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="sports" />
          </Route>
          <Route key="technology" exact path="/technology">
            <Newsarea displayAsList={displayAsList} setProgress={handleProgressChange} theme={theme} category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;