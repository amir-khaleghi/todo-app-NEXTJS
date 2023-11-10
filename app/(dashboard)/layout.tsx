import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col mx-4 p-4 gap-2  ">
      {/* <h1>Dashboard</h1> */}
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
