import React from 'react'
import chef from '../assets/chef.png'
const Home3 = () => {
    return (
        <div>
            <div className="home2bg">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center text-center">
                    <div className="p-4">
                        <h1 className="text-4xl lg:text-6xl navfont">ONLY HIGH QUALITY FOODS</h1>
                    </div>
                    <div>
                        <img src={chef} alt="chef" />
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Home3
