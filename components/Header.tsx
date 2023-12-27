import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-col w-full border-b pb-2 shadow-lg rounded-t-lg p-2 bg-white">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold ">Home</h1>
        <Image
          className="rounded-full w-10 h-10 object-cover"
          alt="profile"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          width={100}
          height={100}
        />
      </div>
    </header>
  );
};
export default Header;
