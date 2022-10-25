import { recipes } from "../../files/recipes.js";
import CustomNavBar from "../../components/CustomNavBar";
import CustomFooter from "../../components/CustomFooter";
import ViewDetailsRecipe from "../../components/Recipe/ViewDetailsRecipe";

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
    return {
        props: { recipe: recipe }
    }
}

const Details = ({ recipe }) => {
    return (
        <div>
            <CustomNavBar />
            <ViewDetailsRecipe title={recipe.title} />
            <CustomFooter />
        </div>
    )
}

export default Details;