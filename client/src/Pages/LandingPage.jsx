import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import heroBanner from "../Assets/heroSectionbanner.mp4";
import { constants } from "../constants"
import Testimonials from '../Components/Testimonials';
import SubscriptionCard from '../Components/SubscriptionCard';


function LandingPage() {
  const [activePlan , setActivePlan] = useState(2);

  useEffect(()=>{
      console.log(' ')
  },[activePlan])

  const clickPlansCard = (plan) =>{
        setActivePlan(plan)
  }
  return (
    <div className='w-full flex flex-col items-center  overflow-x-hidden' >
       <NavBar />
       {/* hero sections */}
       <div className='relative w-[100vw]'>
            <video autoPlay loop muted className='w-full h-full' >
              <source src={heroBanner} type="video/mp4" />
            </video>
            {/* hero healindes , sub headlines , quotes , CTAs */}
            <div className='absolute top-[25vh] left-[25vw] flex flex-col items-center'>
              <p className='text-8xl font-bold text-white text-center'>
              You Like it Clean  <br />
              We Like it dirty
              </p>
              <p className='text-xl text-white mt-8'>
                Experience Professional Maintenance and Repairs for Your Vehicle
              </p>
              <button className='w-[12vw] h-[5vh] mt-10 text-xl  text-white border-2 border-white rounded-md hover:bg-white hover:text-black'>
                Book Now
              </button>
            </div>
       </div>
       {/* benefits headline section */}
       <div className='w-full h-[30vh] flex items-center justify-center'>
         <p className='text-5xl font-bold'>
         Why Choose Our Car Servicing Agents?
         </p>
       </div>
       {/* benefits sections */}
       {/* benefits 1 sections */}
       <div className='w-full flex flex-col items-center relative'>
              <div className="w-full h-[100vh] bg-[url(~Assets/Benefit1Banner.jpg)] bg-clip-content bg-center bg-cover">
              </div>
                <div className='w-[50vw] h-full absolute right-0 bg-slate-900 opacity-95'>
                  <div className='w-[60%] absolute bottom-24 right-24'>
                    <p className='text-white font-bold text-2xl my-4 mx-4'>
                      {constants.benefits.benefit1.headline}
                    </p>
                    <p className='text-white font-normal text-xl my-4 mx-4'>
                      {constants.benefits.benefit1.text}
                    </p>
                  </div>
              </div>
       </div>
       {/* benefits 2 sections */}
       <div className='w-full flex flex-col items-center relative'>
                <div className="w-full h-[100vh] bg-[url(~Assets/Benefit2Banner.jpg)] bg-clip-content bg-center bg-cover">
                </div>
                <div className='w-[50vw] h-full absolute right-0 bg-slate-900 opacity-95'>
                  <div className='w-[60%] absolute bottom-24 right-24'>
                    <p className='text-white font-bold text-2xl my-4 mx-4'>
                      {constants.benefits.benefit2.headline}
                    </p>
                    <p className='text-white font-normal text-xl my-4 mx-4'>
                      {constants.benefits.benefit2.text}
                    </p>
                  </div>
              </div>
       </div>
       {/* benefits 3 sections */}
       <div className='w-full flex flex-col items-center relative'>
                <div className="w-full h-[100vh] bg-[url(~Assets/Benefit3Banner.jpg)] bg-clip-content bg-center bg-cover">
                </div>
                <div className='w-[50vw] h-full absolute right-0 bg-slate-900 opacity-95'>
                  <div className='w-[60%] absolute bottom-24 right-24'>
                    <p className='text-white font-bold text-2xl my-4 mx-4'>
                      {constants.benefits.benefit3.headline}
                    </p>
                    <p className='text-white font-normal text-xl my-4 mx-4'>
                      {constants.benefits.benefit3.text}
                    </p>
                  </div>
              </div>
       </div>
       {/* benefits 4 sections */}
       <div className='w-full flex flex-col items-center relative'>
                <div className="w-full h-[100vh] bg-[url(~Assets/Benefit4Banner.jpg)] bg-clip-content bg-center bg-cover">
                </div>
                <div className='w-[50vw] h-full absolute right-0 bg-slate-900 opacity-95'>
                    <div className='w-[60%] absolute bottom-24 right-24'>
                      <p className='text-white font-bold text-2xl my-4 mx-4'>
                        {constants.benefits.benefit4.headline}
                      </p>
                      <p className='text-white font-normal text-xl my-4 mx-4'>
                        {constants.benefits.benefit4.text}
                      </p>
                    </div>
              </div>
       </div>
        {/* benefits 5 sections */}
        <div className='w-full flex flex-col items-center relative'>
                <div className="w-full h-[100vh] bg-[url(~Assets/Benefit5Banner.jpg)] bg-clip-content bg-center bg-cover">
                </div>
                <div className='w-[50vw] h-full absolute right-0 bg-slate-900 opacity-95'>
                  <div className='w-[60%] absolute bottom-24 right-24'>
                    <p className='text-white font-bold text-2xl my-4 mx-4'>
                      {constants.benefits.benefit5.headline}
                    </p>
                    <p className='text-white font-normal text-xl my-4 mx-4'>
                      {constants.benefits.benefit5.text}
                    </p>
                  </div>
              </div>
       </div>
       {/* "brands we do repairs and detailing" */}
       <div className='w-full h-[70vh] flex flex-col items-center justify-evenly'>
         <p className='text-5xl font-bold'>
          Trusted by Top Car Brands
         </p>
         <div className='w-[110vw] flex items-center justify-evenly'>
           {constants.brands.map((brand,index)=>{
            return <p key ={index} className='text-3xl font-bold text-slate-500'>
               {brand}
            </p>
           })}
         </div>
       </div>
       {/* testimonials for our agency */}
       <div className='w-full h-[100vh] mt-10 flex flex-col items-center justify-evenly'>
          <p className='h-[20vh] text-5xl font-bold'>
            Our Satisfied Customers Speak
          </p>
          <div className='w-[90vw] h-[70vh]'>
              <Testimonials />
          </div>
       </div>
       {/* plans to subscribe */}
       <div className='w-full h-[160vh] flex flex-col items-center justify-evenly mt-32'>
            <p className='text-5xl font-bold mb-14'>
              Choose the Perfect Plan for Your Car
            </p>
            <p className='w-[65%] text-2xl text-center font-medium text-slate-500'>
              {constants.plans.subheadline}
            </p>
            {/* plans container */}
            <div className='w-full h-[75%] flex flex-row items-center justify-evenly'>
                  <SubscriptionCard plan = {constants.plans.basicPlan.headline}
                                    others={constants.plans.basicPlan.others}
                                    price={constants.plans.basicPlan.price}
                                    benefits={constants.plans.basicPlan.planbenefits}
                                    cardId={1}
                                    clicked={clickPlansCard}
                                    active={activePlan}
                                    />
                  <SubscriptionCard plan = {constants.plans.premiumPlan.headline}
                                    others={constants.plans.premiumPlan.others}
                                    price={constants.plans.premiumPlan.price}
                                    benefits={constants.plans.premiumPlan.planbenefits}
                                    cardId={2}
                                    clicked={clickPlansCard}
                                    active={activePlan}
                                    />
                  <SubscriptionCard plan = {constants.plans.advancedPlan.headline}
                                    others={constants.plans.advancedPlan.others}
                                    price={constants.plans.advancedPlan.price}
                                    benefits={constants.plans.advancedPlan.planbenefits}
                                    cardId={3}
                                    clicked={clickPlansCard}
                                    active={activePlan}
                                    />

            </div>
            <button className='w-[24vw] h-[5vh] bg-sky-500 rounded-lg text-white font-medium shadow-xl my-5'>
                Start Saving and Servicing
            </button>
       </div>
       <div>
            <div>
                  <div>
                    <p>
                      Woooh
                    </p>
                    <p>
                      Best car servicing agent around the world
                    </p>
                  </div>
                  {/* quick links  */}
                  <div>
                          <p>
                              Services
                          </p>
                          <p>
                              Pricing
                          </p>
                          <p>
                              Testimonials
                          </p>
                          <p>
                              FAQ
                          </p>
                          <p>
                              Careers
                          </p>
                  </div>
                  {/* service locations */}
                  <div>
                        <p>
                          United Kingdom
                        </p>
                        <p>
                          United States
                        </p>
                        <p>
                          France
                        </p>
                        <p>
                          India
                        </p>
                        <p>
                          Rsussia
                        </p>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default LandingPage;