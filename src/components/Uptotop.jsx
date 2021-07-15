import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

const Uptotop = () => {
    return (
        <div className="sticky bottom-0 p-3 flex justify-end">
            <button className="px-4 py-4 text-white rounded-full bg-yellow-500 focus:outline-none" onClick={scroll.scrollToTop}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            </button>
        </div>
    )
}

export default Uptotop
