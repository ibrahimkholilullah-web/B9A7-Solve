import { useEffect } from "react";
import { useState } from "react";
import SingleFoosCard from "./SingleFoosCard";

const FoodCard = ({handleFoodDitails}) => {
    const [recipics, setRecipics] = useState([])
    useEffect(()=>{
        fetch('/public/Food.json')
        .then(res => res.json())
        .then(data => setRecipics(data))
        

    },[])
    return (
        <div className="w-2/3">
            <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
               {
                recipics.map(rescpis=> <SingleFoosCard key={rescpis.recipe_id} handleFoodDitails={handleFoodDitails} rescpis={rescpis}></SingleFoosCard>)
               }
            </div>
        </div>
    );
};

export default FoodCard;