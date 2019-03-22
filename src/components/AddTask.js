import React from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';
import {addTask} from '../actions/Tasks';


export class AddTask extends React.Component {
    state = {
        taskName: '',
      }

    handleChange =(e)=> {
        const value= e.target.value;
        this.setState({taskName: value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.taskName) return;
        const task = {
            taskName: this.state.taskName, 
            completed: false, 
            deleted: false, 
            id: uuidv4()
        };
        this.props.addTask(task);
        this.setState({ taskName: '' });
    }
   
    render()
    {
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <h2 className="col-12">ToDo List</h2>
                <input className="form-control col-7 mx-auto" type="text" onChange={this.handleChange} value={this.state.taskName} placeholder="Task Name"></input>
                <button type="submit" className="btn btn-success col-3 mx-auto">Add</button>  
            </form>
        )
    }      
    
}

const mapDispatchToProps=(dispatch)=>({ 
    addTask : data => dispatch (addTask(data)),
   
})
export default connect (null,mapDispatchToProps)(AddTask);