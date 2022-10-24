import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Layout, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { recipes } from "../files/recipes.js";
import ListRecipe from "../components/Recipe/ListRecipe";

const App = ({ title }) => {

    const [state, setState] = useState(false);

    useEffect(() => {
        setTimeout(() => setState(true), 1000);
    }, []);

    // const renderRecipes = Object.entries(recipes).map(([index, item]) => {
    //     return (
    //         <Card className="card" title={index} description={item} />   
    //     )
    // });

    const { Header, Content } = Layout;
    return (
        <Layout>
            <Header>
                <Row justify="space-between">
                    <Col style={{color: "#fff"}}>
                        Recipes
                    </Col>
                    <Col>
                        <UserOutlined style={{color: "#fff"}} />
                    </Col>
                </Row>
            </Header>
            <Content>
                {/* <div>
                    <div className="cards-container">
                        {renderRecipes}
                    </div>
                </div> */}
                <ListRecipe recipes={recipes} />
            </Content>
        </Layout>
        
    )
};

export default App;
