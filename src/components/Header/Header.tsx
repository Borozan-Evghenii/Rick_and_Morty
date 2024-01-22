'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/src/components/Header/HeaderLogo/HeaderLogo';


const Header: React.FC = () => {
  const param = usePathname();
  return (
    <header className="container mx-auto bg-[#fff]">
      <div className="py-[20px] flex justify-between items-center">
        <Logo path={param} />
        <ul className="flex items-center gap-5">
          <Link
            className={`text-[14px] hover:text-[#ff9800] ${param === '/episode'? 'text-[#ff9800] ': ''}`}
            href={'episode'}
          >Episodes</Link>
          <Link
            className={`text-[14px] hover:text-[#ff9800] ${param === '/location'? 'text-[#ff9800] ': ''}`}
            href={'location'}
          >Location</Link>
        </ul>

      </div>
    </header>
  );
};

export default Header;