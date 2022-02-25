import React from 'react';
import '../../frontend/src/App.css'
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import feedbacks from './pages/feedbacks';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import busqueda from './pages/busqueda';
import usuarios from './pages/usuarios';


function App(){
  return (
    
  <Router>
    <Header/>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/usuarios" exact component={usuarios}/>
      <Route path="/busqueda" exact component={busqueda}/>
      <Route path="/nosotros" exact component={NosotrosPage}/>
      <Route path="/feedbacks" exact component={feedbacks}/>
    </Switch>
    <Footer/>
  </Router>
  
  );
}

export default App;