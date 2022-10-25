import { Layout } from "antd";

const CustomFooter = () => {
   const { Footer } = Layout;
   return (
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
   )
}

export default CustomFooter;