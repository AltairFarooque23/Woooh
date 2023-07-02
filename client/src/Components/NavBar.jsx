import React from 'react'

function NavBar() {
  return (
    <div className='w-full h-14 flex items-center justify-between'>
        <div className='w-1/6 flex items-center justify-center'>
            <p className='text-2xl font-bold'>
                Woooh
            </p>
        </div>
        <div className='absolute w-full h-full flex flex-col bg-white justify-center items-center
                        lg:w-1/2 lg:h-full lg:flex-row lg:relative lg:justify-between lg:items-center '>
                <p className='p-0 m-0 font-medium text-base'>
                    Pricing
                </p>
                <p className='p-0 m-0 font-medium text-base'>
                    Testimonials
                </p>
                <p className='p-0 m-0 font-medium text-base'>
                    Trusted Brands
                </p>
                <p className='p-0 m-0 font-medium text-base'>
                    Benefits
                </p>
        </div>
        <div className='w-1/2 flex items-center justify-center sm:1/4 md:w-1/3 lg:w-1/5'>
            <button className='w-3/4 px-4 font-medium text-cyan-950 border-2 border-cyan-950 rounded-md sm:w-1/3 md:w-1/2 lg:w-1/2 xl:w-1/2'>
                Join Now
            </button>
        </div>
        
    </div>
  )
}

export default NavBar;