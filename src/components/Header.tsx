import React from 'react';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="align-center flex h-[60px] justify-between px-[20px] py-[17px]">
      <span>AUSG</span> <span>메뉴아이콘</span>
    </div>
  );
}
