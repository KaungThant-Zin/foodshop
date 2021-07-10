import React from 'react'
import ReactLoading from 'react-loading';

const Myloader = () => {
    return (
        <div className="flex justify-center text-center items-center mt-56">
            <ReactLoading type={"bars"} color={'#f79400'} height={70} width={70} />
        </div>
    )
}

export default Myloader
