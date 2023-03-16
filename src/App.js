import "./App.css";
import { useState } from "react";
import { Layout, Space, Avatar, Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import AntLayout from "./AntLayout";
const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;

function App() {
  
return (
  <AntLayout/>
)

}

export default App;

// I might make it so that the calculator clears the moment you click another button on the calculator after an equation has been solved
// another thing i may do though it make it so the number from a solve equation stays and can be used for another equation. if this is done instead ill just make a clear calculator button
