import { useState, useEffect } from "react";
import { Layout, Col, Row } from "antd";
import { recipes } from "../files/recipes.js";
import ListRecipe from "../components/Recipe/ListRecipe";
import CustomNavBar from "../components/CustomNavBar";

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
            <Footer 
                style={{ 
                    borderTop: '1px solid #e8e8e8',
                    left: 0,
                    color: '#fff',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#001529',
                    textAlign: 'center'
                }}
            >
                Copyright (c) - Simon DUPERRAY
            </Footer>
        </Layout>
        
    )
};

export default App;
