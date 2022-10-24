import TagItem from "../Tag/TagItem";

const ViewRecipe = (props) => {
    const parseStrToHTML = (str) => {
        return parse(str);
    }
    
    const renderTags = (props) => {
        const isVegetarian = true ? props.vegetarian : false;
        const isVegan = true ? props.vegan : false;
        const isGlutenFree = true ? props.glutenFree : false;
        
        let tags = [];

        if(isVegetarian && isVegan && isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegetarian"/>);
            tags.push(<TagItem tagTitle="Vegan"/>);
            tags.push(<TagItem tagTitle="GlutenFree"/>);
        } else if(isVegetarian && isVegan && !isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegetarian" />);
            tags.push(<TagItem tagTitle="Vegan" />);
        } else if(isVegetarian && !isVegan && isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegetarian" />);
            tags.push(<TagItem tagTitle="Gluten Free" />);
        } else if(isVegetarian && !isVegan && !isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegetarian" />);
        } else if(!isVegetarian && isVegan && isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegan" />);
            tags.push(<TagItem tagTitle="Gluten Free" />);
        } else if(!isVegetarian && isVegan && !isGlutenFree) {
            tags.push(<TagItem tagTitle="Vegan" />);
        } else if(!isVegetarian && !isVegan && isGlutenFree) {
            tags.push(<TagItem tagTitle="Gluten Free" />);
        }

        return (
            <div className="tags-container">
                {
                    tags.map(tag => {
                        return(tag)
                    })
                }
            </div>
        );
    }

    return (
        <div className="card">
            <h1 className="card-title">{props.title}</h1>
            <hr />
            <span className="card-description" dangerouslySetInnerHTML={{ __html: props.instructions }}></span>
            <hr />
            { renderTags(props) }
        </div>
    );
};

export default ViewRecipe;