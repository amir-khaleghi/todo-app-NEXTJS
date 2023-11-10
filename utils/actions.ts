'use server';
import { revalidatePath } from 'next/cache';
import db from './db';
// ─── New To Do ────────────────────────────────────── 🟩 ─

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });

  /**
   * //NOTE: soft refresh => not refresh the page but expire the cache of that page which then forces it to go refresh its data.
   * Clean the cache
   */

  revalidatePath('/todos');
};

// ──────────────────────────────────────────────────── 🟩 ─
// ─── Delete Todo ──────────────────────────────────── 🟩 ─

export const deleteTodo = async (id) => {
  await db.todo.delete({
    where: { id },
  });

  revalidatePath('/todos');
};

// ──────────────────────────────────────────────────── 🟩 ─
// ─── Complete Todo ──────────────────────────────────── 🟩 ─

export const completeTodo = async (id) => {
  // Get the current todo to check its "completed" field
  const todo = await db.todo.findUnique({
    where: { id },
    select: {
      completed: true,
    },
  });

  if (todo) {
    // Toggle the "completed" field
    const updatedCompleted = !todo.completed;
    // Update the "completed" field with the new value
    await db.todo.update({
      where: { id },
      data: {
        completed: updatedCompleted,
      },
    });

    revalidatePath('/todos');
  }
};

// ──────────────────────────────────────────────────── 🟩 ─
// ──────────────────────────────────────────────────── 🟩 ─
// ─── Archive Todo ──────────────────────────────────── 🟩 ─

// export const archiveTodo = async (id) => {
//   await db.todo.delete({
//     where: { id },
//   });

//   revalidatePath('/todos');
// };
