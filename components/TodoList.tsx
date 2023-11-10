import React from 'react';
import Todo from './Todo';
import Archive from './Archive';

const TodoList = ({ todos }) => {
  return (
    <div>
      {/* // ─── Todo ─────────────────────────────────────────────── */}
      <div>todo</div>
      <div className="border-black border-b" />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            key={todo.id}
          />
        </div>
      ))}
      <br />
      {/* // ─── Archive ───────────────────────────────────────────── */}
      <div>Archive</div>
      <div className="border-black border-b" />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Archive
            todo={todo}
            key={todo.id}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;