import React from 'react'
import ReactLoading from 'react-loading';

const Myloader = () => {
    return (
        <div className="flex justify-center text-center items-center mt-20 pt-20">
            <ReactLoading type={"bars"} color={'#f79400'} height={50} width={50} />
        </div>
    )
}

export default Myloader
