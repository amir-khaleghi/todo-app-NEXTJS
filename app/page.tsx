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
const Home = async () => {
  const currentDate = new Date();
  const todos = await getData();
  const todaysTasks = todos.filter(
    (todo) =>
      todo.createAt.toLocaleString().split(',')[0] ==
      currentDate.toLocaleString().split(',')[0]
  );

  const completedPercent = todaysTasks.filter((todo) => todo.completed).length;
  const totlalPercent = todaysTasks.length
    ? Math.floor((completedPercent / todaysTasks.length) * 100)
    : 0;
  return (
    <div className="relative">
      <TodoList todos={todaysTasks} />
      <div
        className="absolute  left-1/2 transform -translate-x-1/2  -bottom-10
"
      >
        {totlalPercent}% Completed
      </div>
    </div>
  );
};

export default Home;
