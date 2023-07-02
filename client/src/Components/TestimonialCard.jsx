import React from 'react';
import { constants } from '../constants';

function TestimonialCard() {
  return (
    <div className='w-[20vw] h-[56vh] p-6 flex flex-col items-start border-2 rounded-xl shadow-lg cursor-pointer bg-white'>
        {/* name of review */}
        <p className='text-xl font-bold my-1'>
            {constants.testimonials.review1.name}
        </p>
        {/* rating stars */}
        <div>
            <span className='text-2xl text-sky-500'> &#9733;</span>
            <span className='text-2xl text-sky-500'> &#9733;</span>
            <span className='text-2xl text-sky-500'> &#9733;</span>
            <span className='text-2xl text-sky-500'> &#9733;</span>
            <span className='text-2xl text-sky-500'> &#9733;</span>
        </div>
        {/* review text */}
        <p className='text-lg mt-5 text-slate-600'>
            {constants.testimonials.review1.text}
        </p>
    </div>
  )
}

export default TestimonialCard;