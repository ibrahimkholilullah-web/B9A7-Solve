const FoodDetails = ({
    foodDitails,
    handleRemove, 
    preparedRecipe,
    totalTimeAndCalories,
    totalTime,
    totalCalories,
    }) => {
    return (
        <div className="md:w-1/3 p-2 border-2 rounded-xl">
            <div>
            <h1 className="text-center font-bold border-b-2 pb-1">Food Ditails {foodDitails.length}</h1>
            <div className="overflow-x-auto">
           <table className="table">
             {/* head */}
             <thead>
               <tr>
                 <th></th>
                 <th>Name</th>
                 <th>Time</th>
                 <th>Calories</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {/* row 1 */}
               {
                foodDitails.map((recipe, index) => (
                    <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                    <td>
                    <button onClick={()=>{
                         handleRemove(recipe.recipe_id)
                        totalTimeAndCalories(recipe.preparing_time,recipe.calories)
                    }} 
                    className=" py-2  bg-green-400 text-sm px-4 font-bold rounded-full ">Preparing</button>

                    </td>
                  </tr>))
               }
             </tbody>
           </table>
           </div>
        </div>
        <div>
            <h1 className="text-center font-bold border-b-2 pb-1">Curendly Cooking : {preparedRecipe.length}</h1>
            <div className="overflow-x-auto">
           <table className="table">
             {/* head */}
             <thead>
               <tr>
                 <th></th>
                 <th>Name</th>
                 <th>Time</th>
                 <th>Calories</th>
               </tr>
             </thead>
             <tbody>
               {/* row 1 */}
               {
                preparedRecipe.map((recipe, index) => (
                    <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                  </tr>))
               }
               <tr>
                <th></th>
                <td></td>
                <td>Total Time : {totalTime}</td>
                <td>Total Calories : {totalCalories}</td>
                </tr>
             </tbody>
           </table>
           </div>
        </div>
        
        </div>
    );
};

export default FoodDetails;