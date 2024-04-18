import React from 'react'

const Cards = () => {


  return (
    <div className='flex justify-center '>
        <div className='card1 h-[283px] w-[250px] bg-white  mx-8 '>
            <h2 className='text-2xl my-4 text-center font-bold'>Gaming accessories</h2>
           <p className='mx-3'>
           <img src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY320_.jpg" />
           </p> 
            <p className='text-blue-500 text-center mx-auto my-5'>See More</p>


        </div>
        <div className='card1 h-[283px] w-[250px] bg-white  mx-8 '>
        <h2 className='text-2xl my-4 text-center font-bold'>Deals in Pc</h2>
        <p className='mx-3'>
        <img src="https://m.media-amazon.com/images/I/313zteqI9LL._SY150_.jpg"/>
        </p>
        <p className='text-blue-500 text-center mx-auto my-5'>See more</p>


        </div>
        <div className='card1 h-[283px] w-[250px] bg-white  mx-8 '>
        <h2 className='text-2xl my-4 text-center font-bold'>Refresh Your Space</h2>
        <p className='mx-3'>
              <img src="https://m.media-amazon.com/images/I/31qcGgiIK7L._SY150_.jpg"
/>      </p>
  <p className='text-blue-500 text-center mx-auto my-5'>Shop Now</p>


        </div>

      
    </div>
  )
}

export default Cards
