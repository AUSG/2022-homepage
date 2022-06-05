import React from 'react';
import MenuIcon from 'public/icons/menu.svg';
import LogoIcon from 'public/icons/logo.svg';

export default function Header() {
  return (
    <div className="flex h-[60px] items-center justify-between bg-transparent px-[20px] py-[17px]">
      <LogoIcon className="h-[16px] w-[92px]" />
      <MenuIcon className="h-[24px] w-[24px]" />
    </div>
  );
}
