/* ■■■■■■■■■■■■■■■■■■■■■ Root Layout ■■■■■■■■■■■■■■■■■■■■ */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// create some links
// ──────────────────────────────────────────────────── 🟩 ─
const Links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/todos', label: 'Todos' },
];

// ──────────────────────────────────────────────────── 🟩 ─
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} md:grid md:grid-cols-6 gap-4 text-sm md:m-20 lg:mx-40 no-scrollbar bg-dotted`}
      >
        <header className="flex items-start  col-span-1 md:h-screen pt-4">
          <nav className="w-full mx-4 px-4  ">
            <ul className="flex flex-row justify-between gap-2 items-center md:flex-col  ">
              {/* map through Links */}
              {Links.map((link) => (
                <li
                  key={link.href}
                  className="bg-cyan-200  flex rounded-xl w-full h-24 justify-center items-center duration-300 transition-all hover:rotate-6 hover:scale-105 md:w-36 md:h-36"
                >
                  <Link href={link.href}> {link.label} </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="col-span-5">{children}</div>
      </body>
    </html>
  );
}
