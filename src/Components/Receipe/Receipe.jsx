import React from 'react'
import Card from '../Card/Card'
import { useContext } from 'react'
import SearchContext from '../../Context/SearchContext'
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function Famous() {
  const{search,setSearch,handleSubmit,receipe} = useContext(SearchContext)

  return <div className='container mx-auto py-6'>
           <div className="flex items-center justify-center mb-6">
        <div className="flex items-center border border-black/90 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              className="bg-white/90 border-none w-40 focus:outline-none"
              placeholder="Search your recipe..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <LocalDiningIcon style={{ color: "#FF9292" }} />
          </form>
        </div>
      </div>
      <div className='container mx-auto flex flex-wrap justify-center gap-10 py-6'>
          {
            receipe.length>0 ?receipe.map((value) =><Card value={value}/>):
            <div className='my-12'>
            <h1 className='text-2xl font-semibold text-center text-gray-800'>Oops! No results found 😔. Try searching for something else to discover delicious recipes.</h1>
              </div>
              }
      </div>
     
  </div>
  
   
  
}

export default Famous