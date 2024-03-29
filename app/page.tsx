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

  /* Todays Tasks _______________________________________ */
  const todaysTasks = todos.filter(
    (todo) =>
      todo.createAt.toLocaleString().split(',')[0] ==
      currentDate.toLocaleString().split(',')[0]
  );

  /* Percent ____________________________________________ */
  const completedPercent = todaysTasks.filter((todo) => todo.completed).length;
  const totalPercent = todaysTasks.length
    ? Math.floor((completedPercent / todaysTasks.length) * 100)
    : 0;

  /* ■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="relative">
      <TodoList todos={todaysTasks} />
      <div
        className="absolute  left-1/2 transform -translate-x-1/2  -bottom-10
"
      >
        {totalPercent}% Completed
      </div>
    </div>
  );
};

export default Home;
