const SingleFoosCard = ({rescpis, handleFoodDitails}) => {
    const {calories,preparing_time,ingredients,recipe_image,short_description,recipe_name} = rescpis
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-4 md:h-[700px]">
             <figure>
               <img className="h-52 w-full"
                 src={recipe_image}
                 alt="recip Img" />
             </figure>
             <div className="card-body p-4">
               <h2 className="card-title ">{recipe_name}</h2>
               <p>{short_description}</p>
               <h1 className="text-md font-bold">Ingredients : {ingredients.length}</h1>
               <ul>
                {
                    ingredients.map((item, index) => (<li className="list-disc ml-5" key={index}>{item}</li>) )
                }
               </ul>
               <div className="flex gap-6">
                <div className="font-bold">
                <i className="fa-regular fa-clock"></i>
                <span className="ml-3">{preparing_time} Min .</span>
               
                </div>
                <div className="font-bold">
                <i className="fa-solid fa-fire"></i>        
                <span className="ml-3">{calories} Calories.</span>
                </div>
               </div>
               <div className="card-actions">
                 <button onClick={()=> handleFoodDitails(rescpis)} className="btn bg-green-400 text-lg px-8 rounded-full font-bold mt-3">Want to Cook</button>
               </div>
             </div>
            </div>
        </div>
    );
};

export default SingleFoosCard;