import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};


TodoList.defaultProps = {
    TodoList: [],
}

function TodoList({todoList}) {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}></li>
            ))}
        </ul>
    );
}

export default TodoList;
