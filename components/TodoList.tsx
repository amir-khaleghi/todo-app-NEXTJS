import React from 'react';
import Todo from './Todo';
import Archive from './Archive';

const TodoList = ({ todos }) => {
  return (
    <div>
      {/* // ─── Todo ─────────────────────────────────────────────── */}
      <div className="flex back-shadow justify-center w-full p-2 font-mono text-xl font-bold bg-cyan-300 rounded-t-lg">
        Todo
      </div>
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
      <div className="flex back-shadow justify-center w-full p-2 font-mono text-xl font-bold bg-cyan-300 rounded-t-lg">
        Done
      </div>
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
