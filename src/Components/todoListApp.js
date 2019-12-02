import React, { Component } from 'react';
// import './todoListApp.css';
class todoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            counter:0,
            enable:false
         };
    }
    toggle = () =>{
        this.setState({enabled: !this.state.enabled});
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
    handleIncrement =()=>{
        this.setState({
            counter:this.state.counter+1
        });
        console.log(this.state.counter);
    }
    managecounter =()=>{
        return(
            <span className ={this.getBadgeClasses()} >
            {
            this.formateCount()
            }
        </span>
        );
    }
    handelArray = ()=>
    {
        if(this.props.taskList.length === 0)
        {
            return<h1 className="badge m-2 badge-warning">The Given Todo List is Empty </h1>
        }
        else
        {
            return(
                <div className="todo_Container">
                    {
                        this.props.taskList.map(ts=>
                            <div style ={styles.container} key={ts.id}>
                                {ts.task}
                                {this.managecounter()}
                                <button onClick={()=>this.props.delete(ts.id)} className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                                <button className="btn btn-primary btn-sm" onClick={()=>this.props.editData(ts.id)}>
                                Edit
                                </button>
                                <button className="btn btn-warning btn-sm" onClick={()=>{this.handleIncrement()}}>
                                    Increment
                                </button>
                                {
                                    this.state.enabled === true ? 
                                    <input type="input" placeholder="Enter a value" onChange={this.props.onChange}/>
                                    : <span>{this.state.name}</span>
                                }
                                <button onClick={() => this.toggle()} type="submit" >
                                    {
                                        this.state.enabled === true? "Disable": "Enable"
                                    }
                                </button>

                            </div>
                        )
                    }
                </div>
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                <div style={{textAlign:"center"}}>
                    {
                        this.handelArray()
                    }
                </div>
            </React.Fragment>    
        );
    }
}

export default todoListApp;
const styles = {
    container: {
        padding:"10px",
        width: "100%", 
        height: 50, 
        backgroundColor: "gray", 
        marginTop: 5, 
        color: "white"
    }
}