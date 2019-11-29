import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Search from './Components/Search';
import Home from './Components/Home';
import Details from './Components/Details';

class App extends Component {
  render() {
  return (
    <div>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/search" component={Search}/>
     <Route path="/details" component={Details}/>
     </Switch>
    </div>
  );
}
}

export default App;
