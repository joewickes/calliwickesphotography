'use client';

import Link from 'next/link';
import { ArrowUp } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

const TopArrow = () => {
  const [path, setPath] = useState('#');

  useEffect(() => {
    if (window) {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <Link href={path} legacyBehavior passHref>
      <ArrowUp size={30} className="cursor-pointer" />
    </Link>
  );
};

export default TopArrow;
