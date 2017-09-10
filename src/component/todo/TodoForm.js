import React from 'react';

export const TodoForm = (props) => (
    <form onSubmit={props.handelSubmit}>
        <input type="text" onChange={props.handelInputChange} value={props.currentTodo} />
    </form>
)

TodoForm.propTypes = {
    currentTodo: React.PropTypes.string.isRequired,
    handelInputChange: React.PropTypes.func.isRequired
}