import TodoList from '@/components/TodoList';
import db from '@/utils/db';
import { resolve } from 'path';

//get data
// ──────────────────────────────────────────────────── 🟩 ─
const getData = async () => {
  try {
    const todos = await db.todo.findMany({});
    return todos;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// ──────────────────────────────────────────────────── 🟩 ─
const TodosPage = async () => {
  const todos = await getData();
  const completedPercent = todos.filter((todo) => todo.completed).length;
  const totlalPercent = Math.floor((completedPercent / todos.length) * 100);
  return (
    <div className="relative">
      <TodoList todos={todos} />
      <div
        className="absolute  left-1/2 transform -translate-x-1/2  -bottom-10
"
      >
        {totlalPercent}% Completed
      </div>
    </div>
  );
};

export default TodosPage;
