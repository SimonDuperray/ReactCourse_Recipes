import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Layout, PageHeader, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
                <div>
                    <div className="cards-container">
                        {renderRecipes}
                    </div>
                </div>
            </Content>
        </Layout>
        
    )
};

export default App;