import React from 'react'

function SubscriptionCard({plan , others , price , benefits, cardId ,clicked ,active}) {

    const cardClicked = () =>{
          clicked(cardId)
    }
  return (
    <div className= {`w-[24vw] min-h-max ${cardId === active ? 'border-4 border-sky-500' :'border-2 border-slate-300'} rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:-translate-y-5 ease-in-out transition-transform duration-300`}
         onClick={cardClicked}>
        <p className="text-2xl font-bold my-7">
            {plan}
        </p>
        <div className="flex items-center">
            <p className="text-4xl font-semibold text-sky-500 mr-1">
                {price}
            </p>
            <span className="font-medium text-2xl">/</span>
            <p className='font-medium text-md mt-2 ml-1'>
                month
            </p>
        </div>
        <button className={`border-2 border-sky-500 w-[58%] h-[5.5vh] font-bold text-lg 
                            ${cardId === active ? 'text-white' : 'text-sky-500'} 
                            ${cardId === active ? 'bg-sky-500' : 'bg-white'} rounded-md my-8`}>
            Get Started
        </button>
        <p className='font-bold text-md text-slate-700'>
            {others}
        </p>
        {benefits.map((benefit , index) => {
            return (<div key={index} className='w-[65%] h-max flex items-center my-3' >
                      <span className='font-semibold text-xl text-green-500 mr-3'>&#x2713;</span>
                      <p className='font-semibold text-lg'>
                        {benefit}
                      </p>
                    </div> )
        })
        }
        <span className="mb-2"></span>
    </div>
  )
}

export default SubscriptionCard;