import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import Latest from './components/pages/Latest'
import Genres from './components/pages/Genres'
import Popular from './components/pages/Popular'
import MangaInfo from './components/pages/MangaInfo'
import Footer from './components/Footer'
import Reading from './components/pages/Reading'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/komine-app' exact component={Home} />
          <Route path='/sign-in' exact component={SignIn} />
          <Route path='/latest' exact component={Latest} />
          <Route path='/genres' exact component={Genres} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/manga-info' component={MangaInfo} />
          <Route path='/reading' component={Reading} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
