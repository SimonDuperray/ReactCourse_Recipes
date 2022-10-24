import { recipes } from "../../files/recipes.js";

export const getStaticPaths = () => {
    const paths = recipes.map(recipe => {
        return {
            params: {
                id: recipe.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id; 
    let recipe = null;
    
    for(let i=0; i<recipes.length; i++) {
        if(recipes[i].id==id){
            recipe=recipes[i];
            break;
        }
    }
    console.log(recipe);
    return {
        props: { recipe: recipe }
    }
}

const Details = ({ recipe }) => {
    return (
        <div>
            <h1>{recipe.title}</h1>
        </div>
    )
}

export default Details;