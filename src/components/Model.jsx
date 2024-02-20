import Link from 'next/link'
import React from 'react'

const Model = ({closeModel}) => {
  return (
    <div className= "w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
      <div className="bg-white p-5 rounded-lg text-center">
        <p className='pb-5 text-black font-bold text-xl'>Item successfully added to cart!</p>
        <div className='flex justify-around items-center'>
            <Link className="bg-blue-500 p-4 rounded-xl " href="/cart">Go to Cart</Link>
            <button className="bg-red-500 p-4 rounded-xl" onClick={closeModel}>Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default Model