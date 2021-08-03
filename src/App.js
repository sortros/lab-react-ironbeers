import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import BeersPage from './views/BeersPage';
import SingleBeerPage from './views/SingleBeerPage';
import RandomBeerPage from './views/RandomBeerPage';
import NewBeerPage from './views/NewBeerPage'

function App() {
  return (
    <div>
    
    < Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/random-beer" component={RandomBeerPage}/>
      <Route  path="/new-beer" component={NewBeerPage}/>
      <Route exact path="/beers" component={BeersPage}/>
      <Route path="/beers/:beerId" component={SingleBeerPage}/>
    </Switch>


    </div>
  );
}

export default App;
