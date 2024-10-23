import { useState } from 'react'
import './App.css'
import FoodCard from './Components/FoodCard/FoodCard'
import FoodDetails from './Components/FoodDitails/FoodDetails'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Recipes from './Components/Recipes/Recipes'

function App() {
  const [foodDitails, setFoodDitails] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
  const handleFoodDitails = ditails =>{
    const isExist = foodDitails.find(previewdata => previewdata.recipe_id === ditails.recipe_id);
    if(!isExist){
      setFoodDitails([...foodDitails , ditails])
    }
    else{
      alert('Recipe Already exiated in the queue.')
    }
    
  }
  const totalTimeAndCalories = (time, calories) =>{
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  }
  const handleRemove = id =>{
    const deleteRecipe = foodDitails.find(recipe => recipe.recipe_id === id);

    const updateQueue = foodDitails.filter(recipe => recipe.recipe_id !== id)
    setFoodDitails(updateQueue);
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }
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
        <FoodDetails 
        totalTimeAndCalories={totalTimeAndCalories} 
        preparedRecipe={preparedRecipe} 
        foodDitails={foodDitails} 
        handleRemove={handleRemove}
        totalCalories={totalCalories}
        totalTime={totalTime}
        ></FoodDetails>
      </div>
      </main>
      
    </>
  )
}

export default App
