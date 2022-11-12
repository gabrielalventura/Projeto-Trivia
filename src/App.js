import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import ScreenGame from './pages/ScreenGame';
import SettingsPage from './pages/SettingsPage';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ ScreenGame } />
        <Route path="/settings" component={ SettingsPage } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}

export default App;
