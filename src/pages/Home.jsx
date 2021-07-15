import React from 'react'
import Home2 from '../components/Home2';
import Homeitems2 from '../components/Homeitems2';
import Homeitems1 from '../components/Homeitems1';
// import Home3 from '../components/Home3';


const Home = () => {
    // const [isAnimated, setIsAnimated] = useState(false)
    // useEffect(() => {
    //     setIsAnimated(true)
    // }, [])
    return (
        <>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center min-h-screen">
                    <Homeitems1 />
                    <Homeitems2 />
                </div>
                {/* <div className="flex justify-center cursor-pointer" onClick={scroll.scrollToTop}>
                    <svg className="w-10 h-10 foodcolor animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div> */}
            </div>
            <Home2 />
        </>
    )
}

export default Home
