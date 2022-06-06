import React from 'react';
import MenuIcon from 'public/icons/menu.svg';
import LogoWhite from 'public/images/logo-white.svg';
import LogoColor from 'public/images/logo-color.svg';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  theme?: 'white' | 'colored';
}

export default function Header({ theme = 'white' }: HeaderProps) {
  return (
    <div className="flex h-[60px] items-center justify-between bg-transparent md:mx-auto md:max-w-screen-xl">
      <Link href="/">
        <a className="flex h-full items-center px-[20px]">
          {theme === 'white' ? (
            <LogoColor className="h-[16px] w-[92px]" />
          ) : (
            <LogoWhite className="h-[16px] w-[92px]" />
          )}
        </a>
      </Link>
      <button type="button" className="flex h-full items-center px-[20px]">
        <MenuIcon
          className={`h-[24px] w-[24px] ${
            theme === 'white' ? 'fill-primary' : 'fill-white'
          }`}
          style={{ fill: theme === 'white' ? 'black' : 'white' }}
        />
      </button>
    </div>
  );
}
