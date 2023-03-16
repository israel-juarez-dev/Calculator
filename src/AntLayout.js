import "./App.css";
import { useState } from "react";
import { Layout, Space, Avatar, Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Calculator from './Calculator'
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;
const headerStyle = {
  
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
function AntLayout () {
  // display is where the numbers and operators will show, on line 45 i have the div where display shows
  const [display, setDisplay] = useState([]);

  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => addNumber(i)} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const addNumber = (i) => {
    setDisplay(display + i);
    console.log();
  };
  const addAddition = () => {
    setDisplay(display + "+");
  };
  const addSubtraction = () => {
    setDisplay(display + "-");
  };
  const addMultiplication = () => {
    setDisplay(display + "*");
  };
  const addDivision = () => {
    setDisplay(display + "/");
  };
  const addDecimal = () => {
    setDisplay(display + ".");
  };

  // This will solve the whole equation and simplyify it
  const solveEquation = () => {};

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]} 

      align="center"
    >
      <Layout>
        <Header style={headerStyle}>Super calculator</Header>
        <Content style={contentStyle} >
          {" "}
          <Card
            style={{
              width: 300,
            }}
            
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
<Calculator/>
          </Card>{" "}
        
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
}

export default AntLayout;

// I might make it so that the calculator clears the moment you click another button on the calculator after an equation has been solved
// another thing i may do though it make it so the number from a solve equation stays and can be used for another equation. if this is done instead ill just make a clear calculator button
