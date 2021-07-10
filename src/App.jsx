import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './assets/style.css'
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom'
import Menu from './pages/Menu';
import About from './pages/About';
import Signin from './pages/Signin';
import Footer2 from './components/Footer2';
import Myloader from './components/Myloader';
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import { css } from "@emotion/react";


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])

//   const override = css`
//   margin-top: 100;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   width: 100%;
//   height: 100%;
// `;
  return (
    <>
      {loading ? <Myloader/> :
        <div className="bg-white">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={Signin} />
          </Switch>
          <Footer2 />
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
