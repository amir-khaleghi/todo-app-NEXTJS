'use client';
import { AiFillHome } from 'react-icons/ai';
import { HiPlusSm } from 'react-icons/hi';
import { FaRegClipboard } from 'react-icons/fa6';
import Link from 'next/link';
import NewTodoForm from './NewTodoForm';
import { useState } from 'react';

const Links = [
  { href: '/', label: 'Home', icon: <AiFillHome /> },
  { href: '/boards', label: 'Boards', icon: <FaRegClipboard /> },
];
const Sections = () => {
  /* State ________________________________________________ */
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="relative">
      {/* new task */}
      {showForm && <NewTodoForm handleShow={handleShow} />}
      <nav className="flex  bottom-0 w-full justify-between px-4 ">
        {Links.map((link) => {
          return (
            <div
              key={link.href}
              className="flex items-center w-20 h-20 justify-center flex-col mx-0 my-2 hover:shadow-lg  hover-105  rounded-full"
            >
              <Link
                className="flex flex-col items-center"
                href={link.href}
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            </div>
          );
        })}
      </nav>
      <button
        onClick={handleShow}
        className="absolute  left-1/2 transform -translate-x-1/2  bottom-6 hover:scale-110 hover:shadow-lg rounded-full p-4"
      >
        <HiPlusSm className="text-2xl" />
      </button>
    </div>
  );
};
export default Sections;