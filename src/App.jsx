import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './assets/style.css'
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom'
import Menu from './pages/Menu';
import About from './pages/About';
import Signin from './pages/Signin';
import Footer2 from './components/Footer2';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About}/>
        <Route path="/signin" component={Signin}/>  
      </Switch>
      <Footer2/>
      <Footer />
    </div>
  );
}

export default App;
