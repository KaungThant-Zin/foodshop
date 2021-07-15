import React from 'react'
import Zoom from 'react-reveal/Zoom'

const Home2items = (props) => {
    return (
        <Zoom>
        <div className="px-5 py-5">
            <div className="bg-white rounded-2xl shadow-2xl px-3 py-3">
                <img src={props.img} alt="home2menu" className="w-full"/>
                <p className="p-2 text-lg navfont capitalize lg:text-xl">Name: {props.title}</p>
                <p className="px-2 navfont text-lg lg:text-xl">price: {props.price}</p>
                <button className="transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110 ml-2 mt-2 px-3 focus:outline-none rounded-lg py-3 bg-yellow-500 text-white navfont ">See Detail</button>
            </div>
        </div>
        </Zoom>
    )
}

export default Home2items
