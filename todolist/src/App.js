import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";

import TodoList from "./TodoList";
import GithubServe from "./GithubServe";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import {
  withRouter
} from 'react-router-dom';


/*
 <TodoList token = {this.state.token}/>
*/


class App extends Component {

	

  render() {
    return (
      <div className="App">
      	
        


        <Router>
        	 <Route path = "/github_serve" exact component = {GithubServe}/>
       		 <Route path = "/" exact component = {Home}/>
       		 <Route path = "/todolist" exact strict component = {TodoList}/>
        </Router>

       
        
        
      </div>
    );
  }
}

export default App;
