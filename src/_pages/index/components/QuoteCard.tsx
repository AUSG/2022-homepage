import React from 'react';
import Image from 'next/image';
import QuoteIcon from 'public/icons/quote.svg';

interface QuoteCardType {
  content: string;
  name: string;
  profile: string;
  imagePath: string;
}

export default function QuoteCard({
  content,
  name,
  profile,
  imagePath,
}: QuoteCardType) {
  return (
    <div className="rounded-[20px] bg-gray-100 px-[30px] py-[20px] xl:px-[40px] xl:py-[26px]">
      <QuoteIcon className="fill-primary text-[30px]" />
      <div className="mt-[12px] whitespace-pre-line text-[14px] xl:mt-[18px] xl:text-[16px]">
        {content}
      </div>
      <div className="mt-[24px] flex items-center xl:mt-[32px]">
        <div className="mr-[8px] h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full xl:mr-[30px] xl:h-[60px] xl:w-[60px]">
          <Image src={imagePath} width="100%" height="100%" alt="" />
        </div>
        <div className="text-[14px]">
          <strong>{name}</strong>
          <br />
          <span className="text-[12px]">{profile}</span>
        </div>
      </div>
    </div>
  );
}
