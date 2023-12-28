import TodoList from '@/components/TodoList';
import db from '@/utils/db';
import { resolve } from 'path';
//get data
// ──────────────────────────────────────────────────── 🟩 ─
const getData = async () => {
  try {
    const todos = await db.todo.findMany({
      where: {
        completed: false,
      },
    });
    return todos;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// ──────────────────────────────────────────────────── 🟩 ─
const TodosPage = async () => {
  const todos = await getData();
  const totalHours = todos.reduce((sum, todo) => sum + Number(todo.time), 0);
  const totalTasks = todos.length;
  return (
    <div className="relative">
      <TodoList todos={todos} />
      <div
        className="absolute  left-1/2 transform -translate-x-1/2  -bottom-10
"
      >
        <div className="border-b">
          {totalHours} Hours | {totalTasks} Tasks
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
