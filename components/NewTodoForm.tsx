/**Create a to do form that submit data without using JS */
'use client';
import { newTodo } from '@/utils/actions';
import { useState } from 'react';

const NewTodoForm = () => {
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');
  const handleForm = (e) => {
    setTask('');
    setHours('');
  };
  return (
    <div>
      <form
        action={newTodo}
        className="flex mb-10 flex-col gap-2 justify-center md:flex-row items-end  md:items-center"
        onSubmit={handleForm}
      >
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="flex flex-col justify-between my-4 col-span-1 row-span-2 items-center  gap-2">
            <label htmlFor="task">Task:</label>
            <label htmlFor="task">Hours:</label>
          </div>
          <div className="flex flex-col items-center row-span-2  gap-2">
            <input
              name="content"
              type="text"
              className="border border-black/25 rounded-xl  w-full p-2"
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              name="time"
              type="text"
              className="border border-black/25 rounded-xl  w-full p-2"
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-1/3   back-shadow rounded-xl p-2  md:mx-4  my-2 md:my-0  mb-8 font-semibold text-xs hover-105 hover:bg-green-200 "
          type="submit"
        >
          New Task
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
