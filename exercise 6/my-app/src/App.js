import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu} from 'antd';
import {NavLink, Route, Redirect} from "react-router-dom";
import EmployeesContainer from "./components/employeesPage/EmployeesContainer";
import MainContainer from "./components/mainPage/MainContainer";

const { Header, Content, Footer } = Layout;


const App = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1" >
                        <NavLink  to="/main">Главная</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        <NavLink  to="/employees">Сотрудники</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', minHeight: '100vh', margin: '50px'}}>

                <div className="site-layout-content">


                    <Route path='/employees'
                           render={() => <EmployeesContainer/>}/>

                    <Route path='/main'
                           render={() => <MainContainer/>}/>

                    <Redirect exact from="/" to="/employees"/>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2020 Created by Ivan Sidarau</Footer>
        </Layout>
        )

}

export default App;
