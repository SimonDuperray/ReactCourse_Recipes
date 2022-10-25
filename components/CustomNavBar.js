import { Layout, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CustomNavBar = () => {
   const { Header } = Layout;
   return (
      <Header>
         <Row justify="space-between">
            <Col style={{color: "#fff"}}>
               <a id="home" href="/">Recipes Book</a>
            </Col>
            <Col>
               <UserOutlined style={{color: "#fff"}} />
            </Col>
         </Row>
      </Header>
   )
}

export default CustomNavBar;