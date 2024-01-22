'use client';
import Link from 'next/link';
import React from 'react';
import Logo from '@/src/components/icons/Logo/Logo';

interface HeaderLogo {
  path: string;
}

const HeaderLogo: React.FC<HeaderLogo> = ({ path }) => {

  let title = 'Characters';
  if (path !== '/'){
    title = path.replace('/','');
    title = title.charAt(0).toUpperCase() + title.slice(1)
  }




  return (
    <div className="flex gap-2 items-center">
      <Logo/>
      <Link href={'/'}>Rick and Morty /</Link>
      <span
        className="text-[12px] py-1 px-3 border border-[#ff9800] rounded-2xl"
      >{title}</span>
    </div>
  );
};

export default HeaderLogo;