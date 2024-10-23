import { useState } from 'react'
import './App.css'
import FoodCard from './Components/FoodCard/FoodCard'
import FoodDetails from './Components/FoodDitails/FoodDetails'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [foodDitails, setFoodDitails] = useState([])
  const handleFoodDitails = ditails =>{
    const isExist = foodDitails.find(previewdata => previewdata.recipe_id === ditails.recipe_id);
    if(!isExist){
      setFoodDitails([...foodDitails , ditails])
    }
    else{
      alert('Recipe Already exiated in the queue.')
    }
    
  }
console.log(foodDitails)
  return (
    <>
      <header>
      <Header></Header>
      </header>
      <main>
      <Hero></Hero>
      <Recipes></Recipes>
      <div className='flex container mx-auto gap-4'>
        <FoodCard handleFoodDitails={handleFoodDitails}></FoodCard>
        <FoodDetails foodDitails={foodDitails}></FoodDetails>
      </div>
      </main>
      
    </>
  )
}

export default App
