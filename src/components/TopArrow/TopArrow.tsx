'use client';

import Link from 'next/link';
import { ArrowUp } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';

const TopArrow = () => {
  const path = usePathname();

  return (
    <Link href={path} legacyBehavior passHref>
      <ArrowUp size={30} className="cursor-pointer" />
    </Link>
  );
};

export default TopArrow;
