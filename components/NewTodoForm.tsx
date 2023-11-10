/**Create a to do form that submit data without using JS */

import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black/25 rounded-xl   w-full p-4"
        />
        <button
          className=" bg-slate-300 rounded-xl p-2 mt-2  font-semibold text-2xl w-full"
          type="submit"
        >
          New Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
