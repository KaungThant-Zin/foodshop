import React from 'react'

const Menucontent = (props) => {
    return (
        <div>
            <div className='bg-white mt-3 border-red-400  border rounded-lg mb-2 shadow-xl mx-2'>
                <div className="mt-0">
                    {/* For Image */}
                    <center>
                        <img src={props.img} alt="foodimage" className="p-4 menufoods object-cover" />
                    </center>
                </div>
                <div className="navfont">
                    {/* For  Title */}
                    <p>{props.title}</p>
                </div>
                <div className="navfont">
                    <p className="font-semibold"><span className="font-normal">price</span> {props.price}</p>
                </div>
                <div className="mt-3 mb-3">
                    <button className="hover:bg-yellow-600 bg-yellow-500 text-white navfont text-lg focus:outline-none px-3 py-3 rounded-full">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Menucontent
