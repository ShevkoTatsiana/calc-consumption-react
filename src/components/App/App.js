import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.scss';
import {HomePage} from '../Pages/HomePage/HomePage';
import {MaterialPage} from '../Pages/MaterialPage/MaterialPage';
import {ResultPage} from '../Pages/ResultPage/ResultPage';
import {GalleryPage} from '../Pages/GalleryPage/GalleryPage';
import {HeaderComponent} from '../components/HeaderComponent/HeaderComponent';

export function App() {
  return (
    <div className="App">
      <Router>
          <div>
              <HeaderComponent/>
              <div className="app-content">
                  <Switch>
                      <Route path="/material">
                          <MaterialPage/>
                      </Route>
                      <Route path="/result">
                          <ResultPage/>
                      </Route>
                      <Route path="/gallery">
                          <GalleryPage/>
                      </Route>
                      <Route path="/">
                          <HomePage/>
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
    </div>
  );
}

export default App;
