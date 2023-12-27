import React from 'react';
import Todo from './Todo';
import Archive from './Archive';

const TodoList = ({ todos }) => {
  const renderedTask = todos.map((todo) => (
    <div key={todo.id}>
      <Todo todo={todo} />
    </div>
  ));

  return <div className="flex flex-col gap-2 m-2 py-2">{renderedTask}</div>;
};

export default TodoList;
