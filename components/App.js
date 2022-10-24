import { useState, useEffect } from "react";
import Card from "../components/Card";

const App = ({ title }) => {

    const [state, setState] = useState(false);

    useEffect(() => {
        setTimeout(() => setState(true), 1000);
    }, []);

    const recipes = {
        "Recette 1": "blablabla",
        "Recette 2": "blablabla",
        "Recette 3": "blablabla"
    };

    const renderRecipes = Object.entries(recipes).map(([index, item]) => {
        return (
            <Card className="card" title={index} description={item} />
                
        )
    });

    return (
        <div>
            <h1>{state ? title : "Loading title..."}</h1>
            <div className="cards-container">
                {renderRecipes}
            </div>
        </div>
    )
};

export default App;