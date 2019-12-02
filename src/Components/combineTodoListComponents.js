import React, { Component } from 'react';
import TodoList from './todoListApp';
import TodoHeader from './todoHeader';
import Task from './task';
class combineTodoListComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemsList:[],
            items:""
         };
    }
    

    onChange =(event)=>
    {
        const newTask = event.target.value;
        this.setState({
            items:newTask
        });
        console.log(this.state.items);
    }
    addData =()=>{
        const newId = Math.random()*1000*Math.random();
        const newTask = new Task(this.state.items, newId);
        const newArray = [...this.state.itemsList,newTask];
        this.setState({
            itemsList:newArray
        });
        console.log(this.state.itemsList);
    }
    deleteData =(id)=>
    {
        console.log('Delete Button IS Called');
        const array = this.state.itemsList.filter(ts=>id!==ts.id);
        console.log(array);
        this.setState({
            itemsList:array
        });
        // console.log('Delete Button IS Called');
    }
    edit=(id , e)=>{
     console.log("Edit is called");
     const mTasks =this.state.itemsList;
     const index = this.state.itemsList.findIndex(t => t.id === id);
     if(index >=0){
       mTasks[index] = new Task( this.state.items, id);
     }
     console.log("Updated Task List");
     console.log(this.state.itemsList);
     this.setState({
         itemsList: mTasks,
         items:""
    });
      }
    render() {
        return (
            <React.Fragment>
                <div>
                    <TodoHeader onChange={this.onChange} addData={this.addData} />
                    <TodoList taskList={this.state.itemsList} delete={this.deleteData} onChange={this.onChange} editData={this.edit} />
                </div>
            </React.Fragment>

        );
    }
}

export default combineTodoListComponents;