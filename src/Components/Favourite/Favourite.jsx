import React from 'react'
import Card from '../Card/Card'
import { useContext } from 'react'
import SearchContext from '../../Context/SearchContext'


function Favourite() {
  const{favourite} = useContext(SearchContext)

  return <div className='container mx-auto py-6'>
      <div className='container mx-auto flex flex-wrap justify-center gap-10 py-6'>
          {
            favourite.length>0 ?favourite.map((value) =><Card value={value}/>):
            
            <div className='my-20'>
            <h1 className='text-2xl font-semibold text-center text-gray-800'>Oops! Your favorites list seems to be empty 😉. Let's add some delightful recipes to it! 🍲✨</h1>
              </div>
              }
          
      </div>
     
  </div>
  
   
  
}

export default Favourite