const ListRecipe = (props) => {
    console.log(props.recipes[0]['title']);
    return (
        <div>
            {props.recipes.map(recipe => {
                return (
                    <div key={recipe.title}>
                        <h2>Title: {recipe.title}</h2>
                        <h2>Végétarien: {recipe.vegetarian.toString()}</h2>
                        <h2>Végan: {recipe.vegan.toString()}</h2>
                        <hr />
                </div>
            );
        })}
        </div>
    )
};

export default ListRecipe;