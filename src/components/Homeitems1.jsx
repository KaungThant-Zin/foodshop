import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'


const Homeitems1 = () => {
    return (
        <>
            <Fade left>
                <div className="lg:p-20 p-5 lg:order-1 order-2">
                    <h1 className="ml-6 navfont text-4xl lg:text-6xl">BEST <span className="foodcolor">FOODSHOP</span> EVER</h1>
                    <p className="mt-3 mx-6 text-justify text-sm testfont text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div className="flex justify-center" onClick={scroll.scrollTo}>
                        <Link to="/menu" className="mt-5 mb-0 bg-yellow-500 text-white flex px-3 py-3 rounded-full animate-bounce shadow-xl">
                            ORDER NOW
                        <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </Link>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Homeitems1
