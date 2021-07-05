import React from 'react'
import foodtable from '../assets/foodtable.jpg'

const Home2 = () => {
    return (
        <div>
            <div className="mt-3 navfont text-center text-2xl lg:text-5xl">
                ONLY <span className="foodcolor">HIGH</span> QUALITY FOODS
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center">
                <div className="p-3 mt-3">
                    <img src={foodtable} alt="foodtable" className="object-cover rounded-3xl" />
                </div>
                <div className="p-3 text-xl lg:text-4xl">
                    <div className="navfont ml-3 text-center">
                        ONLY <span className="foodcolor">HIGH</span> QUALITY FOODS <br />
                        & <span className="foodcolor">BEST</span> SERVICE
                    </div>
                    <p className="text-justify p-3 text-sm text-gray-600 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque, nesciunt voluptatibus delectus illo officiis culpa voluptas ipsa, beatae facere deserunt, ipsum cumque dolorum consequatur quia tempore provident eum. Saepe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fuga, fugiat tenetur delectus cupiditate minima ratione inventore porro itaque a nihil quaerat aliquam eius vel, sed fugit laudantium rerum quibusdam!</p>
                </div>
            </div>
        </div>
    )
}

export default Home2
