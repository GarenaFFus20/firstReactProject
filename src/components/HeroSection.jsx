import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col text-white bg-blue-300 items-center justify-center h-[90vh]' style={{
      backgroundImage:"url('/src/assets/jppl.jpg')",
      backgroundSize:"cover",
      backgroundPosition:"center"
    }} >
      <h2 className='text-4xl text-gray-500 md:text-6xl mb-4 font-bold'> Welcome to My Website </h2>
      <p className='text-lg md:text-xl mb-4'> Your Journey Start Here. </p>
      <button className='bg-white text-gray-700 cursor-pointer font-bold px-4 py-1 rounded-md hover:text-gray-800 hover:bg-gray-400 transition-all duration-200'> Purchase Product </button>
    </div>
  )
}

export default HeroSection