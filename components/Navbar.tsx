// create some links
'use client';
import Link from 'next/link';

//icons
import { LuDot } from 'react-icons/lu';

import { useState } from 'react';
// ──────────────────────────────────────────────────── 🟩 ─
const Links = [
  { href: '/', label: 'Todays Task' },
  { href: '/todos', label: 'Todos' },
  { href: '/done', label: 'Done' },
  { href: '/pomodoro', label: 'Pomodoro' },
];
const Navbar = () => {
  // state
  const [currentRoute, setCurrentRoute] = useState('/');
  // router

  return (
    <nav className="w-full pt-4 ">
      <ul className="flex flex-row justify-center gap-4 items-start  ">
        {/* map through Links */}
        {Links.map((link) => (
          <li
            onClick={() => {
              setCurrentRoute(link.href);
            }}
            key={link.href}
            className="flex flex-col items-center"
          >
            <Link
              className={
                link.href == currentRoute ? 'text-black' : 'text-gray-400'
              }
              href={link.href}
            >
              {link.label}
            </Link>
            {link.href === currentRoute && <LuDot className="text-2xl" />}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
