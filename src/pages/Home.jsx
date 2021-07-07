import React from 'react'
import logofood from '../assets/food4.png'
import { Link } from 'react-router-dom'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
// import Home2 from '../components/Home2';
// import Home3 from '../components/Home3';


const Home = () => {
    // const [isAnimated, setIsAnimated] = useState(false)
    // useEffect(() => {
    //     setIsAnimated(true)
    // }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center min-h-screen">
                <div className="p-3 flex justify-center lg:hidden md:hidden imgshape">
                    <Flip>
                    <img src={logofood} alt="logofood" className="object-cover foodlogo rounded-full" />
                    </Flip>
                </div>
                <Fade left>
                <div className=" mt-5 text-center">
                    <h1 className="navfont text-3xl lg:text-6xl">BEST <span className="foodcolor">FOODSHOP</span> EVER</h1>
                    <p className="mt-3 mx-6 text-justify italic text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque, nesciunt voluptatibus delectus illo officiis culpa voluptas ipsa, beatae facere deserunt, ipsum cumque dolorum consequatur quia tempore provident eum. Saepe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fuga, fugiat tenetur delectus cupiditate minima ratione inventore porro itaque a nihil quaerat aliquam eius vel, sed fugit laudantium rerum quibusdam!</p>
                    
                    <div className="flex justify-center">
                        <Link to="/menu" className="mt-5 mb-0 bg-yellow-500 text-white flex px-3 py-3 rounded-full animate-bounce shadow-xl">
                            ORDER NOW
                        <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </Link>
                    </div>
                </div>
                </Fade>
                <div className=" lg:my-10 p-3 flex justify-center sm:block hidden sm:flex sm:justify-center">
                    <div className="imgshape">
                    <Flip>
                    <img src={logofood} alt="logofood" className="object-cover foodlogo rounded-full" />
                    </Flip>
                    </div>
                </div>
            </div>
            {/* <Home3/> */}
            {/* <Home2/> */}
        </div>
    )
}

export default Home
