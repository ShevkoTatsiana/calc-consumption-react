import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.scss';
import {HomePage} from '../HomePage/HomePage';
import {MaterialPage} from '../MaterialPage/MaterialPage';
import {ResultPage} from '../ResultPage/ResultPage';
import {GalleryPage} from '../GalleryPage/GalleryPage';
import {HeaderComponent} from '../HeaderComponent/HeaderComponent';

export function App() {
  return (
    <div className="App">
      <Router>
          <div>
              <HeaderComponent/>

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
      </Router>
      {/*<MaterialsComponent/>*/}
    </div>
  );
}

export default App;
