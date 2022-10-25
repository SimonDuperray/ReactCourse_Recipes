import { useState, useEffect } from "react";
import { Layout, Col, Row } from "antd";
import { recipes } from "../files/recipes.js";
import ListRecipe from "../components/Recipe/ListRecipe";
import CustomNavBar from "../components/CustomNavBar";
import CustomFooter from "../components/CustomFooter";

const App = () => {

    const [state, setState] = useState(false);

    useEffect(() => {
        setTimeout(() => setState(true), 1000);
    }, []);

    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <CustomNavBar />
            <Content>
                <ListRecipe recipes={recipes} />
            </Content>
            <CustomFooter />
        </Layout>
        
    )
};

export default App;
