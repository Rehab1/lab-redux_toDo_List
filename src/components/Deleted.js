import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/Tasks';


export class DeleteTask extends React.Component {

    undo = (e) => {
        this.props.undoDeleTask(e.target.dataset.id);
    }
    render() {
        return (
            <div>
                {this.props.data.map(t =>
                    t.deleted === true && 
                    <div key={t.id} className="row cardd">
                        <p className="col-3">{t.taskName}</p>
                        <button className="btn btn-info col-2" onClick={this.undo} data-id={t.id}>undo</button>
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
    undoDeleTask: id => dispatch(deleteTask(id)),

})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteTask);