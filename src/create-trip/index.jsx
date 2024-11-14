import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
  const [place , setPlace]= useState();
  const [formData, setFormData]= useState([]);

  const handleInputChange = (name,value) => {
    // setFormData(prevState => ({...prevState, [name]: value }));
    setFormData({...formData,[name]:value});

  }

// 

  useEffect(() =>{
    console.log(formData)

  },[formData])
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'> 
        <h2 className='font-bold text-3xl'>
            Tell us your travel preferences 🏕️
        </h2>
        <p className='mt-3 text-gray-500 text-xl'> just provide some basic information and our trip planner will take care the rest </p>
        <div className='mt-20 flex flex-col gap-10'>
            <div> 
                <h2 className='text-xl my-3 font-medium'> What is your destination of choice?</h2>     

                          <div >
                            <div onClick={() => handleInputChange("location", "london")}>
                              <GooglePlacesAutocomplete
                                  apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                                  selectProps={{
                                      place,
                                      // onChange: (v) => { setPlace(v); handleInputChange("location", v); },
                                  }}
                              />
                          </div>
        </div>
            </div>

            <div>
              <h2 className='text-xl my-3 font-medium'>How many days trip are you planning?</h2>
              <Input placeholder='Ex.3' type='number' onChange={(e)=>handleInputChange('no_of_days',e.target.value)} />
            </div>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>What type of activities are you interested in?</h2>
          <Input placeholder='Ex. Restaurants, Shopping, Cultural experiences' type='text' onChange={(e)=>handleInputChange('activity',e.target.value)} />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5 '>
            {SelectBudgetOptions.map((item,index)=> (<div key={index} onClick={()=>handleInputChange('budget',item.title)} className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.budget==item.title && 'shadow-lg border border-red-400'}`}>
              <h2 className='text-4xl'> {item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>


            </div>))}
          </div> 
        </div>


        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan with your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5 '>
            {SelectTravelList.map((item,index)=> (<div key={index} onClick={()=>handleInputChange('traveler',item.title)} className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData?.traveler==item.title && 'shadow-lg border border-red-400'}`}>
              <h2 className='text-4xl'> {item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2> 
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>


            </div>))}
          </div>
        </div>
            <div className='my-10 flex justify-end '>
                <Button>Generate Trip</Button>

            </div>

    </div>
  )
}

export default CreateTrip