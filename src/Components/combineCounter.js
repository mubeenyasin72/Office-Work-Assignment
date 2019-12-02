import React, { Component } from 'react';
class combineCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
            tags:[],
            item:""
         };
    }
    formateCount = ()=>
    {
        const {counter} = this.state;
        return counter === 0 ? "Zero": counter;
        
    }
    getBadgeClasses =()=>{
        let classes  = "badge m-2 badge-";
        classes +=this.state.counter === 0 ? "warning" : "primary";
        return classes; 
    }
    addData = () =>{
        var var1 = this.state.item;
        console.log(var1 + " this is Var1 Value");
        var var2 = this.state.tags;
        var2.push(var1);
        console.log(var2 + " this is the value of Var2");
        //console.log(var2);
        this.setState({
            tags:var2,
            item:""
        });
    }
    handleIncrement =()=>{
        this.setState({
            counter:this.state.counter+1
        });
    }
    handleArray = () =>{
        if(this.state.tags.length === 0)
        {
            return<p>The Given Array is Empty </p>
        }
        else
        {
            return(
                <ul>
                {
                    this.state.tags.map((e,i) => 
                    <li key = {i}>
                        {e}
                    </li>)
                }
            </ul>
            );
        }
    }
    render() {
            console.log('props',this.props);

        return (
            <React.Fragment>
                <div style={{textAlign:"center"}}>

                    {/* {this.props.children} */}

                    <span className ={this.getBadgeClasses()}>
                        {
                           this.formateCount()
                        }
                    </span>
                    <button className="btn btn-secondary btn-sm" onClick={()=>{this.handleIncrement()}}>
                        Increment
                    </button>
                    <button onClick={ () => this.props.onDelete(this.props.id) } className="btn btn-danger btn-sm m-2">
                            Delete
                    </button>
                    <input type="text" placeholder="enter your value" onChange={(e)=>this.setState(
                        {item:e.target.value
                        }
                    )} />
                    <button onClick={()=>{this.addData()}} className="btn btn-warning btn-sm">
                        Add
                    </button>
                    <div>
                        {
                            this.handleArray()
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
    // formateCount(){

    //     let counter = this.state.counter;
    //     return counter === 0 ? "Zero" : counter;
    // }
}

export default combineCounter;