'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'milestones',
    path: '/milestones'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  // {
  //   name: 'work',
  //   path: '/work'
  // },
  {
    name: 'contact',
    path: '/contact'
  },
  {
    name: 'gallery',
    path: '/gallery'
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el Sheet

  // Función para cerrar el Sheet
  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button onClick={() => setIsOpen(true)}>
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={'/'}>
            <h1>
              Daniel <span className="text-accent">Soto</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={closeSheet} // Cerrar el Sheet cuando se hace clic
              className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
