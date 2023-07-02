import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';
import arrow from "../Assets/right-arrow.png"

function Testimonials() {
    const sliderRef = useRef(null);

    const slideToNextSlide = () =>{
          sliderRef.current.slickNext()
    }

    const slideToPrevSlide = () =>{
        sliderRef.current.slickPrev()
    }
    const settings = {
        infinite: true, // Enable infinite looping
        speed: 750, // Transition speed in milliseconds
        slidesToShow: 2.95, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll per action
        cssEase: 'ease-out', // Default value
        useCSS: true, // Ensure this is set to true
        responsive: [
          {
            breakpoint: 768, // Breakpoint for smaller screens
            settings: {
              slidesToShow: 2, // Adjust the number of slides to show
            },
          },
          {
            breakpoint: 480, // Breakpoint for mobile devices
            settings: {
              slidesToShow: 1, // Adjust the number of slides to show
            },
          },
        ],
      };
  return (
    <div className='w-full h-full flex flex-row items-center'>
        <div className='w-[20%] h-[70%] flex flex-col items-start m-10'>
            <p className='text-lg font-medium text-sky-500 my-8'>
                Testimonials
            </p>
            <p className='w-full text-2xl font-medium'>
                Don’t Believe Me <br /> Check What Client <br /> Think Of Us
            </p>
            <div className='w-[8vw] flex items-center justify-between mt-5'>
                <img className='rotate-180 cursor-pointer' onClick={slideToPrevSlide} src={arrow} alt="" width={44} />
                <img className ='cursor-pointer' onClick={slideToNextSlide} src={arrow} alt="" width={44}/>
            </div>
        </div>
        {/* testimonials corousals */}
        <div className='w-[75%] h-full scroll-smooth'>
            <Slider {...settings} ref={sliderRef}>
            {/* Add your carousel slides here */}
                <div>
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Testimonials;