import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import LogIn from './components/login/LogIn';
import signup from './components/signup/signup'; // Updated import path
import WishList from './components/wishlist/WishList';
import bag from './components/bag/bag';
import FilterMen from './components/filter/FilterMen';
import FilterWomen from './components/filter/FilterWomen';
import Filterkids from './components/filter/Filterkids';
import Filterhome from './components/filter/Filterhome';
import productdetails from './components/productdetails/productdetails';
//import FilterCards from './components/filter/FilterCards';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
        <Route path={'/Login'} component={LogIn} />
        <Route path={'/signup'} component={signup} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/bag'} component={bag} />
        <Route path={'/filtermen'} component={FilterMen} />
        
        <Route path={'/filterwomen'} component={FilterWomen} />
        <Route path={'/filterkids'} component={Filterkids} />
        <Route path={'/filterhome'} component={Filterhome} />
        <Route path={'/productdetails'} component={productdetails} />
        {/* <Route path={'/FilterCards'} component={FilterCards} /> */}
        <Footer />
        <hr />
      </div>
    </Router>
  );
}

export default App;
