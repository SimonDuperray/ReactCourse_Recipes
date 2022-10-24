import ViewRecipe from "./ViewRecipe";

const ListRecipe = (props) => {
    return (
        <div className="cards-container">
            {props.recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <ViewRecipe
                            id={recipe.id}
                            title={recipe.title} 
                            instructions={recipe.instructions} 
                            vegetarian={recipe.vegetarian}
                            vegan={recipe.vegan}
                            glutenFree={recipe.glutenFree}
                            healthScore={recipe.healthScore}
                            pricePerServing={recipe.pricePerServing}
                            ingredients={recipe.ingredients}
                            readyInMinutes={recipe.readyInMinutes}
                            servings={recipe.servings}
                            starry="false"
                        />
                    </div>
                );
            })
        }
        </div>
    )
};

export default ListRecipe;