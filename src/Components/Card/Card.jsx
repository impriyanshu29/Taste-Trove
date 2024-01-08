import { Link } from 'react-router-dom'

import React from 'react'

function Card(value) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={value?.value.image_url}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4 text-center">
        <h1 className="text-lg font-semibold">{value?.value?.title}</h1>
        <p className="mt-1 text-sm text-gray-600">
        {value?.value?.publisher}
           </p>

        <Link to={`/receipe-item/${value?.value?.id}`}>

        <button
        type="button"
        className="mt-4 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Detail Receipe
      </button>
        </Link>
      
      </div>
    </div>
  )
}

export default Card