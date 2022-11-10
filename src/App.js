import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import SreenGame from './pages/ScreenGame';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ SreenGame } />
        <Route path="/settings" component={ SettingsPage } />

      </Switch>
    </div>
  );
}

export default App;
