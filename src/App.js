import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Pistols from './Pistols';
import SMGs from './SMGs';
import Rifles from './Rifles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Valorant from './Valorant.jpg' 
import {Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Pistols" component= {Pistols} />
      <Route path="/SMGs" component= {SMGs} />
      <Route path="/Rifles" component= {Rifles} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}



const Home = () => {
  return (
  <div>  
    <div className="container">
      <h1 className="main-head"> Valorant We<span style={{color:"#f53b57"}}>apon Stats</span> </h1>
  
    </div>


  </div>  
  )
}

export default App;
