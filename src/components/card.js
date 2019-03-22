import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/Tasks';
import { completeTask } from '../actions/Tasks';

class taskCard extends React.Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }

    completeTask = () => {
        this.props.completeTask(this.props.id)
    }
    render() {
        return (
            <div className="row cardd">
                <p className="col-3">{this.props.text}</p>
                <button className="btn btn-warning col-2" onClick={this.completeTask}>Completed</button>
                <button className="btn btn-danger col-2" onClick={this.deleteTask} >Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask: id => dispatch(deleteTask(id)),
    completeTask: id => dispatch(completeTask(id))
})
export default connect(null, mapDispatchToProps)(taskCard);