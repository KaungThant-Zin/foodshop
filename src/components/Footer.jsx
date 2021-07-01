import React from 'react'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png' 

const Footer = () => {
    return (
        <>
            <footer className="mt-10 h-20 px-3 foottop flex justify-center">
                <p className="mt-8 minifont flex text-2xl">
                &copy; 2021 Crafted with <svg className="w-6 h-6" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> by Kaung Thant Zin
                </p>
            </footer>
            <div className="flex justify-center mb-2">
                <a href="http://example.com">
                    <img src={facebook} alt="facebook" className="i2logo" />
                </a>
                <a href="http://example.com">
                    <img src={twitter} alt="twitter" className="ml-4 i2logo" />
                </a>
            </div>
        </>
    )
}

export default Footer