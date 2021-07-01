import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


const Signin = () => {
    const [isAnimated, setIsAnimated] = useState(false)
    useEffect(() => {
        setIsAnimated(true)
    }, [])
    return (
        <>
            <Zoom><h1 className="text-center foodcolor text-4xl font-semibold mt-4 headfont ">Foodshop Login</h1></Zoom>
            <div className="">
                {/* <div className="text-center mt-3">
                    Hello
                </div> */}
                <div className={`${isAnimated ? 'scale-100' : '-translate-y-full'} transform duration-1000 ease-in-out flex p-4 mt-10 mb-9 justify-center items-center`}>
                    <div className="bg-white rounded-lg  border-yellow-500 border shadow-2xl py-10 px-8 lg:px-16">
                        <h1 className="text-2xl navfont mt-4 mb-12 text-center font-semibold foodcolor">
                            Signin to your account
                        </h1>
                        <form>
                            <div className="p-3">
                                <input id='email' label='Email' type='email' placeholder='Your email' className="border border-yellow-500 shadow-lg px-3 py-3 focus:outline-none rounded" />
                            </div>
                            <div className="p-3">
                                <input id='email' label='Password' type='password' placeholder='Your password' className="border border-yellow-500 shadow-lg px-3 py-3 focus:outline-none rounded" />
                            </div>
                            <div className="p-3 flex justify-between items-center">
                                <button className="px-5 py-3 bg-yellow-500 rounded-xl text-white navfont hover:bg-yellow-600 duration-500">
                                    Signin
                                </button>
                                <Link to="/resetpassword" className="navfont text-blue-600">Forget password?</Link>
                            </div>
                            <div className="p-3 navfont">
                                <p>Don't have an account?<Link to="/register" className="navfont text-blue-600 ml-2">Create</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Signin