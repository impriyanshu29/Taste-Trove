import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchContextProvider = ({children}) =>{
    const [search,setSearch] = useState(" ")
    const[receipe,setRecipe] = useState([ ])
    const[receipeDetail,setRecipeDetail] = useState(null)
    const[favourite,setFavourite] = useState([ ])
    async function handleSubmit(e){
        e.preventDefault()
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const data = await res.json();
            if(data?.data?.recipes){
                setRecipe(data?.data?.recipes)
                setSearch(" ")

            }

        }catch(error){
            console.log(error)
            setSearch(" ")
        }
    }

   function  handleFavourite(favouriteItem){
    const newFavourite = [...favourite]
    const found = newFavourite.findIndex((item)=>item.id === favouriteItem.id)
        if(found === -1){
            newFavourite.push(favouriteItem)
        }
        else{
            newFavourite.splice(found,1)
        }
   setFavourite(newFavourite)
    }
    console.log(favourite);

    return(
        <SearchContext.Provider value={{search,receipe,setSearch,handleSubmit,handleFavourite,receipeDetail,setRecipeDetail,favourite}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider

