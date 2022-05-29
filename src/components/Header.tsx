import React from 'react';

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
      <span>AUSG</span> <span>메뉴아이콘</span>
    </div>
  );
}
