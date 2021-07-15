import React from 'react'
import Flip from 'react-reveal/Flip';
import logofood from '../assets/food4.png'

const Homeitems2 = () => {
    return (
        <>
            <div className=" lg:my-10 p-3 flex justify-center sm:order-1">
                    <div className="imgshape">
                        <Flip>
                            <img src={logofood} alt="logofood" className="object-cover foodlogo rounded-full" />
                        </Flip>
                    </div>
                </div>
        </>
    )
}

export default Homeitems2
