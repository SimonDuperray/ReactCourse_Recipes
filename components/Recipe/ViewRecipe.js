import TagItem from "../Tag/TagItem";
import { 
    CheckCircleOutlined, 
    EuroOutlined, 
    FieldTimeOutlined, 
    UserOutlined,
    HeartOutlined,
    HeartFilled
} from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

const ViewRecipe = (props) => {
    
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

    const toggleStar = () => {
        if(starry=="false") {
            setStarry("true");
        } else {
            setStarry("false");
        }
    }

    const [starry, setStarry] = useState("false");

    return (
        <div className="card">
            <h1 className="card-title">
                <Link className="recipe-title-link" href={'/recipe/'+props.id} key={props.id}>{props.title}</Link>
                - {
                    starry=="false" ?
                        <HeartOutlined
                            style={{ color: "#000" }} 
                            onClick={toggleStar} 
                        /> : 
                        <HeartFilled 
                            style={{ color: "#000" }} 
                            onClick={toggleStar}
                        />
                }
            </h1>
            <hr />
            <span className="card-description" dangerouslySetInnerHTML={{ __html: props.instructions }}></span>
            <hr />
            { renderTags(props) }
            <hr />
            <p id="details-title">And this is some details about the recipe:</p>
            <div className="details-container">
                <p>
                    <CheckCircleOutlined style={{ color: "#000" }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {props.healthScore}
                </p>
                <p>
                    <EuroOutlined style={{ color: "#000" }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {props.pricePerServing}€
                </p>
                <p>
                    <FieldTimeOutlined style={{ color: '#000' }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {props.readyInMinutes} minutes
                </p>
                <p>
                    <UserOutlined style={{ color: "#000" }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {props.servings}
                </p>
            </div>
        </div>
    );
};

export default ViewRecipe;