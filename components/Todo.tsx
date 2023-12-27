'use client';
import { removeTask } from '@/app/(Redux)/features/tasks/taskSlice';
import { completeTodo, deleteTodo } from '@/utils/actions';
import { useEffect, useTransition } from 'react';
import { LuDot } from 'react-icons/lu';

/* React Icons __________________________________________ */
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div
      className={`flex w-full gap-2 items-center justify-between  p-1 px-4 border  shadow-lg rounded-sm   ${
        todo.completed ? ' bg-green-100' : ''
      } `}
      onClick={() =>
        startTransition(() => {
          completeTodo(todo.id);
          // console.log(todo.createAt.toLocaleString().split(',')[0]);
        })
      }
    >
      <div className="flex gap-3 items-center text-sm ">
        <input
          readOnly
          id="default-checkbox"
          type="checkbox"
          value=""
          checked={todo.completed ? true : false}
          className="w-4 h-4  m-0 appearance-none text-white checked:bg-green-500 checked:text-white rounded-full  "
        />
        <div
          className={`flex flex-col ${todo.completed ? 'line-through' : ''} `}
        >
          <div className="font-semibold capitalize ">{todo.content}</div>
          <span className="text-gray-500 text-xs">{todo.time} hours</span>
        </div>
      </div>
      {/* // ─── Date ─────────────────────────────────────────── 🟩 ─ */}
      <div className=" flex items-center">
        <div>{todo.createAt.toLocaleString().split('T')[0]}</div>
        <LuDot className="text-4xl text-red-500" />

        {/* <div>{todo.createAt.toLocaleString().split(',')[1]}</div> */}
      </div>
      {/* icons */}
      <div
        onClick={() => {
          dispatch(removeTask(todo.id));
        }}
        className=" flex md:flex-row   "
      >
        <TiDelete className=" text-2xl bg-white  duration-300 transition-all p-1 hover:bg-red-200 z-3 rounded-full hover:scale-110 hover:rotate-3" />
        {/* <div onClick={() => startTransition(() => deleteTodo(todo.id))}>
        </div> */}
      </div>
    </div>
  );
};

export default Todo;
