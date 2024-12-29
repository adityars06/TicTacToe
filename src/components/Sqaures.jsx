import React from 'react'

function Sqaures({value,onClick}) {
  return (
    <div onClick={onClick} className='bg-pink-300 rounded-md m-2 h-28 w-28 text-black flex justify-center items-center font-semibold text-6xl cursor-pointer shadow-md hover:shadow-pink-500/70 hover:scale-105 transition-all duration-200 ease-in-out'>
      <span
    className={`${
      value === 'X'
        ? 'text-black drop-shadow-xl'
        : value === 'O'
        ? 'text-red-700 drop-shadow-xl'
        : ''
    }`}
  >
    {value}
  </span>
    </div>
  )
}

export default Sqaures
