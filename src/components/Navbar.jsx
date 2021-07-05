import React, {useState} from 'react'
import Logo from '../assets/hamburger.png'
import { Link } from 'react-router-dom'
import Dropsidebar from './Dropsidebar'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showsidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <nav className="flex bg-white h-20 items-center justify-between shadow-md">
                {/* logostart */}
                <Link to="/" className="flex ml-5 font-bold text-3xl italic">
                    <img src={Logo} alt="logo" className="ilogo" />
                    <h1 className="ml-2 mt-2 foodcolor headfont">Foodshop</h1>
                </Link>
                {/* Logoend */}
                <div className="px-3 cursor-pointer md:hidden" onClick={showsidebar}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div>

                <div className="justify-end md:block hidden navfont text-lg">
                    <Link to="/" className="focus:border-black focus:border py-6 px-3 rounded-full focus:bg-yellow-500 focus:text-white ">
                        Home
                    </Link>
                    <Link to="/menu" className="focus:border-black focus:border py-6 px-3 rounded-full focus:bg-yellow-500 focus:text-white ">
                        Menu
                    </Link>
                    <Link to="/about" className="focus:border-black focus:border py-6 px-3  rounded-full focus:bg-yellow-500 focus:text-white">
                        About
                    </Link>
                    <Link to="/contact" className="focus:border-black focus:border py-6 px-3 rounded-full focus:bg-yellow-500 focus:text-white ">
                        Contact
                    </Link>
                    <Link to="/signin" className="focus:border-black focus:border py-6 px-3 rounded-full focus:bg-yellow-500 focus:text-white mr-4 ">
                        Signin
                    </Link>
                </div>
            </nav>
            <Dropsidebar sidebar={sidebar} showsidebar={showsidebar}/>
        </>
    )
}

export default Navbar