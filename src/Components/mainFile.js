import React, { Component } from 'react';
import Login from './login';
import Registration from './registration';
import CombineCounter from './combineCounter';
import CombineTodoListComponent from './combineTodoListComponents';
import HomePage from './homepage';
import {Switch, Route} from 'react-router-dom';
class mainFile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <React.Fragment>
                <div>
                 <Switch>
                    <Route exact path ="/" component={HomePage} />
                    <Route  path ="/registration" component={Registration} />
                    <Route  path ="/login" component={Login} />
                    <Route  path ="/combineCounter" component={CombineCounter} />
                    <Route  path ="/combineTodoListComponents" component={CombineTodoListComponent} />
                </Switch>
                </div>
            </React.Fragment>    
        );
    }
}

export default mainFile;