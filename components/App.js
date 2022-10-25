import { Layout } from "antd";
import { recipes } from "../files/recipes.js";
import ListRecipe from "../components/Recipe/ListRecipe";
import CustomNavBar from "../components/CustomNavBar";
import CustomFooter from "../components/CustomFooter";

const App = () => {

    const { Content } = Layout;

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
