import React, { useState, useEffect } from 'react'
import Menucontent from '../components/Menucontent'
import hamburger from '../assets/hamburger_foodlogo.jpg'
import firedpotato from '../assets/fired_potato.jpg'
import pizza from '../assets/pizza.jpg'
import leamonjuice from '../assets/leamon_juice.jpg'
import cake from '../assets/cake.jpg'
import Zoom from 'react-reveal/Zoom';


const Menu = () => {
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        setIsAnimated(true)
    }, [])
    return (
        <div>
            <div className={`${isAnimated? 'scale-y-100' : 'scale-y-0'} transform transition duration-1000 ease-in-out`}>
                <h1 className="mt-5 text-center text-4xl mb-2 headfont foodcolor font-bold">Foodshop Menu</h1>
                <div class="flex mt-4 justify-center">
                    <input type="search" className="focus:outline-none focus:shadow-lg bg-gray-100 shadow rounded-xl border border-red-300 focus:border-red-300 p-3" placeholder="search for..." />
                    <div class="mt-3 ml-2 cursor-pointer">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                </div>
            </div>
            <div className="p-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-center">
                <Zoom>
                <Menucontent img={hamburger} title="Hamburger" price="$3"/>
                <Menucontent img={firedpotato} title="Fired Potato" price="$2" />
                <Menucontent img={pizza} title="Pizza" price="$3" />
                <Menucontent img={leamonjuice} title="Leamon Juice" price="$1" />
                <Menucontent img={cake} title="Cake" price="$5" />
                <Menucontent img={hamburger} title="Hamburger" price="$3" />
                </Zoom>
            </div>
        </div>
    )
}

export default Menu
