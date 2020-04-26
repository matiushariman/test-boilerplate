import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from './actions';
import { toDoListSelector } from './selectors';

export function ToDoListPage() {
  const [newTodo, setNewTodo] = useState();
  const toDoList = useSelector(toDoListSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>
      {toDoList.length > 0 && (
        <ul>
          {toDoList.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      )}
      <div>
        <input
          name="toDo"
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(addTodo(newTodo));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoListPage;
