import React from 'react'
import Home2items from './Home2items'
import cake from '../assets/cake.jpg'
import pizza from '../assets/pizza.jpg'
import fired_potato2 from '../assets/fired_potato2.jpg'
import hamburger from '../assets/hamburger_foodlogo.jpg'
import Wobble from 'react-reveal/Wobble';
import Uptotop from './Uptotop'

const Home3 = () => {
    return (
        <div className="border-t homebluebg ">
            <div className="navfont text-center text-3xl lg:text-6xl mt-5 px-5 py-5">
                <Wobble><h1 className="">TRENDING <span className="foodcolor">FOODS</span> IN <span className="foodcolor">FOODSHOP</span></h1></Wobble>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:px-48 px-8">
                <Home2items img={fired_potato2} title=" fired potato" price="$3"/>
                <Home2items img={pizza} title="pizza" price="$4"/>
                <Home2items img={cake} title="cake" price="$5"/>
                <Home2items img={hamburger} title="hamburger" price="$4"/>
            </div>
            <Uptotop/>
        </div>
    )
}

export default Home3
