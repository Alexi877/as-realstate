import React, {Component} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Search from './Search';
import Home from './Home';

class App extends Component {
  render() {
  return (
    <div>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route path="/search" component={Search}/>
     </Switch>
    </div>
  );
}
}

export default App;
