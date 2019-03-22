import React from 'react';
import {connect} from 'react-redux';
import TaskCard from './card';

const TasksList = props => {
    console.log(props)
    return (
        <div>
            <h3>Todo Tasks</h3>
            {
                props.data.map(t =>
                    !(t.completed || t.deleted) &&
                    <TaskCard key={t.id} text={t.taskName} id={t.id} />
                )}

        </div>
    )
}

const mapStateToProps = state => ({
    data: state.data,
});

export default connect(mapStateToProps)(TasksList);