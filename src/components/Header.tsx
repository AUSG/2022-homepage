import React from 'react';
import MenuIcon from 'public/icons/menu.svg';

type Props = {
  theme?: 'primary' | 'default';
};

export default function Header({ theme = 'default' }: Props) {
  return (
    <div
      className={`flex h-[60px] items-center justify-between bg-transparent px-[20px] py-[17px] ${
        theme === 'primary' ? 'text-primary' : 'text-white'
      }`}
    >
      {/* TODO: replace logo icon */}
      <span>AUSG</span>
      <MenuIcon />
    </div>
  );
}
