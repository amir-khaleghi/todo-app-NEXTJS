'use client';

import TodoList from '@/components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTask } from './(Redux)/features/tasks/taskSlice';
import { useEffect } from 'react';
const Home = () => {
  const dispatch = useDispatch();
  // get data
  const data = useSelector((state) => state.task);
  /* Use effect _________________________________________ */
  useEffect(() => {
    dispatch(fetchTask());
  }, []);

  return (
    <div>
      {data.isLoading ? (
        <div className="  items-center h-[400px] flex justify-center  w-full">
          <div className="loader "></div>
        </div>
      ) : (
        <TodoList todos={data.tasks.data} />
      )}
    </div>
  );
};

export default Home;
