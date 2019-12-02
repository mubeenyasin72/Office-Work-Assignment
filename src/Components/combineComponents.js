import React, { Component } from 'react';
import Todolistpic from './todolistpic.png';
import './combineCpmponents.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './mainFile';
import {Link} from 'react-router-dom';
class combineComponents extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <React.Fragment>
                    <div>
                        <Layout>
                            <Header title="TodoList App" scroll className="Headercss">
                            <img
                                    src = {Todolistpic}
                                    alt="logo"
                                    className="todo-pic"
                                />
                                <Navigation>
                                    <Link to="/registration">Registration</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/combineCounter">Combine Counter</Link>
                                    <Link to="/combineTodoListComponents">Combine Todo Components</Link>
                                </Navigation>
                            </Header>
                            <Content>
                                <div className="page-content" />
                                <Main/>
                            </Content>
                        </Layout>
                    </div>
            </React.Fragment>    
        );
    }
}

export default combineComponents;