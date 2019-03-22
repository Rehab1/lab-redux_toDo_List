import React from 'react';
import { connect } from 'react-redux';
import { completeTask } from '../actions/Tasks';
import { deleteTask } from '../actions/Tasks';

export class CompleteTask extends React.Component {

    undo = (e) => {
        this.props.undoComplTask(e.target.dataset.id);
    }


    deleteTask = (e) => {
        this.props.deletask(e.target.dataset.id)
    }
    render() {
        return (
            <div>
                {this.props.data.map(t =>
                    t.completed && !t.deleted &&
                    <div key={t.id} className="row cardd">
                        <p className="col-3" text={t.taskName}>{t.taskName}</p>
                        <button className="btn btn-primary col-2" onClick={this.undo} data-id={t.id} >undo</button>
                        <button className="btn btn-danger col-2" onClick={this.deleteTask} data-id={t.id} >Delete</button>
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    data: state.data

})

const mapDispatchToProps = (dispatch) => ({
    undoComplTask: id => dispatch(completeTask(id)),
    deletask: id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTask);