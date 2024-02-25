import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      {/*top*/}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Find your next 
       <span className='text-slate-500 '> Perfect</span> 
      <br/>
      Place with ease
      </h1>
      <div className="text-gray-400 text-xs sm:text-sm">
        Urban nest is the best place to find your next 
        perfext place to live
        <br/>
       we have a wide range of properties for you to choose from.
      </div>
      <Link to="/search" className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
       Lets get started ...
      </Link>
    </div>

    {/* swiper */}
     
     <img src="https://media.istockphoto.com/id/174911746/nl/foto/business-district.jpg?s=1024x1024&w=is&k=20&c=_d84RatAISDi6xJmMvVUtr2l3R-W8KzJR9n2bMS4iY8=" alt="building" width='100%'/>

    </div>
  )
}
