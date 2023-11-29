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
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
