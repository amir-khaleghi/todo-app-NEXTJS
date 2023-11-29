'use client';
import { completeTodo, deleteTodo } from '@/utils/actions';
import { useTransition } from 'react';

/* Feather ______________________________________________ */
// import feather from 'feather-icons';
/* React Icons __________________________________________ */
import { PiArchiveBoxFill } from 'react-icons/pi';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      {todo.completed ? (
        ''
      ) : (
        <div
          className={`card-shadow flex w-full gap-2 items-center justify-between   border-b border-slate-300 p-2 my-2 hover:bg-red-100 rounded-lg bg-blue-200  cursor-pointer ${
            todo.completed ? ' bg-green-200' : ''
          } `}
          onClick={() =>
            startTransition(() => {
              completeTodo(todo.id);
              // console.log(todo.createAt.toLocaleString().split(',')[0]);
            })
          }
        >
          <div className="font-bold capitalize">{todo.content}</div>
          {/* // ─── Date ─────────────────────────────────────────── 🟩 ─ */}
          <div className=" flex flex-col gap-2">
            <div>
              <span className="font-bold text-lg px-2">{todo.time}</span>hours
            </div>
            <div>{todo.createAt.toLocaleString().split(',')[0]}</div>
            <div>{todo.createAt.toLocaleString().split(',')[1]}</div>
          </div>
          <div className=" flex md:flex-row flex-col  gap-4">
            <PiArchiveBoxFill className=" bg-white duration-300 transition-all p-1 hover:bg-green-200 text-4xl rounded-full hover:scale-110 hover:rotate-3" />
            <div onClick={() => startTransition(() => deleteTodo(todo.id))}>
              <MdDeleteForever className=" text-4xl bg-white  duration-300 transition-all p-1 hover:bg-red-200 z-3 rounded-full hover:scale-110 hover:rotate-3" />
            </div>
            <div className="items-center flex justify-center text-2xl hover:scale-110 hover:rotate-3">
              <AiFillEdit />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
