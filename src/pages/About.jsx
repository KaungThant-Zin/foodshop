import React from 'react'
import about from '../assets/about2.jpg'
import whoweare from '../assets/whoweare.jpg'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';

const About = () => {
    // const [isAnimated, setIsAnimated] = useState(false)
    // useEffect(() => {
    //     setIsAnimated(true)
    // }, [])
    return (
        <div>
            <div className="grid lg:grid-cols-2 items-center">
                <div className="p-3 mt-6 m-3 text-center">
                    <Fade right>
                    <img src={about} alt="about" className=" rounded-3xl object-cover w-full" />
                    </Fade>
                </div>
                <div className="p-3 mt-4">
                    <Zoom>
                    <h1 className="headfont text-5xl fond-bold foodcolor mb-3 border-b-2 p-2">"About us"</h1>
                    
                    <p className="mt-3 mx-3 italic text-justify navfont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est beatae magni nam rem deserunt quasi dignissimos, doloremque minus asperiores excepturi dicta! Minima cupiditate dolore consequuntur maiores aperiam ea, aspernatur nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sint! Necessitatibus eveniet labore assumenda, magnam natus sed obcaecati ad ab magni odio, nesciunt nisi commodi! Nulla ratione eaque voluptates expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nihil fugiat dolore? Blanditiis, earum beatae porro magnam saepe non sequi numquam modi quibusdam? Dolores autem accusantium quos odit ipsam minus.</p>
                    
                    <div className="flex justify-start p-2 ml-3">
                        <Link to="/contact" className="mt-5 mb-0 bg-yellow-500 text-white flex px-4 py-3 rounded-full animate-bounce shadow-xl navfont font-semibold">
                            CONTACT US
                        </Link>
                    </div>
                    </Zoom>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 items-center">
                {/* formobile */}
                <div className="p-3 sm:block hidden">
                    <Zoom><h1 className="mt-2 text-5xl headfont foodcolor border-b-2 mx-3">Who we are</h1></Zoom>
                    <Zoom>
                    <p className="mt-3 mx-3 italic text-justify navfont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est beatae magni nam rem deserunt quasi dignissimos, doloremque minus asperiores excepturi dicta! Minima cupiditate dolore consequuntur maiores aperiam ea, aspernatur nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sint! Necessitatibus eveniet labore assumenda, magnam natus sed obcaecati ad ab magni odio, nesciunt nisi commodi! Nulla ratione eaque voluptates expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nihil fugiat dolore? Blanditiis, earum beatae porro magnam saepe non sequi numquam modi quibusdam? Dolores autem accusantium quos odit ipsam minus.</p>
                    </Zoom>
                </div>
                <Zoom>
                <div className="p-3 m-3 text-center">
                    <img src={whoweare} alt="whoweare" className="rounded-3xl object-cover w-full" />
                </div>
                </Zoom>
                {/* fordesktop */}
                <div className="p-3 lg:hidden md:hidden">
                    <Zoom><h1 className="mt-2 text-5xl headfont foodcolor border-b-2 mx-3">Who we are</h1></Zoom>
                    <Zoom>
                    <p className="mt-3 mx-3 italic text-justify navfont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est beatae magni nam rem deserunt quasi dignissimos, doloremque minus asperiores excepturi dicta! Minima cupiditate dolore consequuntur maiores aperiam ea, aspernatur nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sint! Necessitatibus eveniet labore assumenda, magnam natus sed obcaecati ad ab magni odio, nesciunt nisi commodi! Nulla ratione eaque voluptates expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum nihil fugiat dolore? Blanditiis, earum beatae porro magnam saepe non sequi numquam modi quibusdam? Dolores autem accusantium quos odit ipsam minus.</p>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}
export default About
