'use client';
import { completeTodo, deleteTodo } from '@/utils/actions';
import { useTransition } from 'react';

/* Feather ______________________________________________ */
// import feather from 'feather-icons';
/* React Icons __________________________________________ */
import { PiArchiveBoxFill } from 'react-icons/pi';
import { MdDeleteForever } from 'react-icons/md';
import { SlOptions } from 'react-icons/sl';
import { RiInboxUnarchiveFill } from 'react-icons/ri';

const Archive = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      {!todo.completed ? (
        ''
      ) : (
        <div
          className={` grid grid-cols-3 place-items-center justify-center  items-center border-b border-slate-300 p-2 my-2 hover:bg-slate-300 rounded-lg  cursor-pointer ${
            todo.completed ? ' bg-green-200' : ''
          } `}
          onClick={() =>
            startTransition(() => {
              completeTodo(todo.id);
            })
          }
        >
          <div className={` ${todo.completed ? 'line-through ' : ''} `}>
            {todo.content}
          </div>
          {/* // ─── Date ─────────────────────────────────────────── 🟩 ─ */}
          <div className=" flex flex-col md:flex-row gap-2">
            <div>{todo.createAt.toLocaleString().split(',')[0]} → </div>
            <div>{todo.createAt.toLocaleString().split(',')[1]}</div>
          </div>
          <div className=" flex gap-4 ">
            <RiInboxUnarchiveFill className=" bg-white duration-300 transition-all p-1 hover:bg-green-200 text-4xl rounded-full hover:scale-110 hover:rotate-3" />
            <div onClick={() => startTransition(() => deleteTodo(todo.id))}>
              <MdDeleteForever className=" text-4xl bg-white  duration-300 transition-all p-1 hover:bg-red-200 z-3 rounded-full hover:scale-110 hover:rotate-3" />
            </div>
            <div className="items-center flex justify-center text-2xl hover:scale-110 hover:rotate-3">
              <SlOptions />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
