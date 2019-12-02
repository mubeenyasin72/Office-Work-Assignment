import React, { Component } from 'react';
import './todoListApp.css';
class todoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        // console.log(this.props.items);
        return (
            <React.Fragment>
                <div className="todo_Container">
                    <input type="text" placeholder="Enter The Items" onChange={this.props.onChange} />
                    <button  className="btn btn-secondary btn-sm" onClick={this.props.addData} >Click Me</button>
                </div>
            </React.Fragment>
        );
    }
}

export default todoHeader;