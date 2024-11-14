import { Input } from '@/components/ui/input';
import { SelectBudgetOptions } from '@/constants/options';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  const [place , setPlace]= useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'> 
        <h2 className='font-bold text-3xl'>
            Tell us your travel preferences
        </h2>
        <p className='mt-3 text-gray-500 text-xl'> just provide some basic information and our trip planner will take care the rest </p>
        <div className='mt-20 flex flex-col gap-10'>
            <div> 
                <h2 className='text-xl my-3 font-medium'> What is your destination of choice?</h2>     
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{place, onChange:(v)=>{setPlace(v);}}}
                    />
            </div>

            <div>
              <h2 className='text-xl my-3 font-medium'>How many days trip are you planning?</h2>
              <Input placeholder='Ex.3' type='number' />
            </div>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>What type of activities are you interested in?</h2>
          <Input placeholder='Ex. Restaurants, Shopping, Cultural experiences' type='text' />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5 '>
            {SelectBudgetOptions.map((item,index)=> (<div key={index} className='p-4 border rounded-lg cursor-pointer hover:shadow-lg'>
              <h2 className='text-4xl'> {item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>


            </div>))}
          </div>
          <Input placeholder='Ex. Restaurants, Shopping, Cultural experiences' type='text' />
        </div>
    </div>
  )
}

export default CreateTrip