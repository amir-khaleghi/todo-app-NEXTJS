import TodoList from '@/components/TodoList';
import db from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { resolve } from 'path';

//get data
// ──────────────────────────────────────────────────── 🟩 ─
const getData = async () => {
  try {
    const todos = await db.todo.findMany({
      where: {
        completed: true,
      },
    });

    revalidatePath('/done');
    return todos;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// ──────────────────────────────────────────────────── 🟩 ─
const DonePage = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default DonePage;
