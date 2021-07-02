import React from 'react'
import Logo from '../assets/hamburger.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png' 
const Footer2 = () => {
    return (
        <div>
            <div className="foottop bg-gray-600 text-white p-4 mt-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {/* logo */}
                    <div className="pl-4 mt-5">
                        <div className="flex font-bold text-3xl italic justify-start pl-11 ml-1">
                            <img src={Logo} alt="logo" className="ilogo" />
                            <h1 className="ml-2 mt-2 foodcolor headfont">Foodshop</h1>
                        </div>
                        <div className="text-xl text-justify pl-4 mx-10 pr-4 mt-2">
                            <p>I provide new recipes with a twist on daily basis. I also post blog posts about fun ideas to do in the kitchen</p>
                            <div className="flex justify-start mt-1 mb-2">
                                <a href="http://example.com">
                                    <img src={facebook} alt="facebook" className="i2logo" />
                                </a>
                                <a href="http://example.com">
                                    <img src={twitter} alt="twitter" className="ml-4 i2logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Recipes */}
                    <div className="pl-16 mt-5 ml-1">
                        <h1 className="text-lg font-semibold navfont">Recipes</h1><hr/>
                        <ul className="text-lg">
                            <li>Chicken</li>
                            <li>Sheep</li>
                            <li>Dinner</li>
                            <li>Rabbit</li>
                        </ul>
                    </div>
                    {/* Legal */}
                    <div className="pl-16 mt-5 ml-1">
                        <h1 className="text-lg font-semibold navfont">Legal</h1>
                        <hr/>
                        <ul className="text-lg">
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                            <li>Cookie Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2
