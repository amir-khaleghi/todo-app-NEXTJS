/**Create a to do form that submit data without using JS */
'use client';
import { newTodo } from '@/utils/actions';
import { useState } from 'react';
import { toast } from 'react-toastify';

const NewTodoForm = () => {
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');
  const handleForm = () => {
    setTimeout(() => {
      setTask('');
      setHours('');
    }, 1000);
  };
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="absolute -z-10 w-full bottom-24">
      <form
        action={newTodo}
        className="flex flex-col justify-center items-center shadow-lg bg-green-100"
        onSubmit={handleForm}
      >
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="flex flex-col justify-between my-4 col-span-1 row-span-2 items-center gap-2">
            <label htmlFor="task">Task:</label>
            <label htmlFor="task">Hours:</label>
          </div>
          <div className="flex flex-col items-center row-span-2 col-span-2 gap-2">
            <input
              required
              name="content"
              type="text"
              className="border border-black/25 rounded-xl bg-white  w-full p-2"
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              required
              name="time"
              type="number"
              className="border border-black/25 rounded-xl  w-full p-2 bg-white"
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              toast.success('New task added.');
            }}
            className="col-span-2 w-full col-start-2  back-shadow rounded-xl p-2 my-4 font-semibold text-xs hover-105 hover:bg-green-400 hover:text-white "
            type="submit"
          >
            New Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodoForm;
