import React from 'react'
import { Link } from 'react-router-dom'

const Dropsidebar = ({ sidebar, showsidebar }) => {
    return (
        <div>
            <div className={sidebar ? 'bg-white shadow-md lg:hidden md:hidden' : 'hidden'} onClick={showsidebar}>
                <div className="navfont foottop">
                    <Link to="/" className="pt-3 py-2 ml-5 block">
                        Home
                    </Link>
                    
                    <Link to="/menu" className="pt-3 py-2 ml-5 block">
                        Menu
                    </Link>
                    <Link to="/about" className="pt-3 py-2 ml-5 block">
                        About
                    </Link>
                    <Link to="/contact" className="pt-3 py-2 ml-5 block">
                        Contact
                    </Link>
                    <Link to="/signin" className="pt-3 py-2 ml-5 block pb-3">
                        Signin
                    </Link>
                </div>
            </div>
        </div>

        // <div className='flex'>
        //     <span className='flex-grow'></span>
        //     <div className={sidebar ? "lg:hidden bg-black h-40 " : 'hidden'} onclick={showsidebar}>
        //         Hello World
        //     </div>
        // </div>
    )
}

//screen 1/2 
//if sidebar true => content -> Hidden
//Home Local Glabal About 

export default Dropsidebar