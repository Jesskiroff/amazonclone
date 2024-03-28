import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";

<<<<<<< HEAD
function App(){
    return(
        //BEM
        <Router>
         <div className='app'>
            <Header />
            
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>    
        </div>
        </Router>
    );
=======
function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
>>>>>>> 7a16c04ab93f4cbf85e23e58db6e4edbff628692
}

export default App;
