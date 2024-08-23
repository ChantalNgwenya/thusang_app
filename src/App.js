import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Settings from './js/Settings';
import './App.css';

function App() {
  return (
    <Router>
      
        <Route exact path ="/" component={Settings}/>
      
    </Router>
  );
}

export default App;
