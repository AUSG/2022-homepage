import React from 'react';
import MenuIcon from 'public/icons/menu.svg';
import LogoImage from 'public/images/logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex h-[60px] items-center justify-between bg-transparent px-[20px] py-[17px]">
      <div className="h-[16px] w-[92px]">
        <Image src={LogoImage} alt="ausg logo" />
      </div>
      <MenuIcon className="h-[24px] w-[24px] text-white" />
    </div>
  );
}
