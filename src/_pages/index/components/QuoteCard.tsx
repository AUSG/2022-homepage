import React from 'react';
import Image from 'next/image';
import QuoteIcon from 'public/icons/quote.svg';

interface QuoteCardType {
  content: string;
  profile: string;
  generation: string;
  imagePath: string;
}

export default function QuoteCard({
  content,
  profile,
  generation,
  imagePath,
}: QuoteCardType) {
  return (
    <div className="rounded-[20px] bg-gray-100 px-[30px] py-[20px] xl:px-[40px] xl:py-[26px]">
      <QuoteIcon className="fill-primary xl:w-[24px]" height="100%" />
      <div className="mt-[8px] whitespace-pre-line text-[14px] xl:mt-[12px] xl:text-[16px]">
        {content}
      </div>
      <div className="mt-[8px] flex items-center xl:mt-[12px]">
        <div className="mr-[8px] h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full xl:mr-[30px] xl:h-[60px] xl:w-[60px]">
          <Image src={imagePath} width="100%" height="100%" alt="" />
        </div>
        <div className="text-[14px]">
          <strong>{profile}</strong>
          <br />
          <span className="text-[12px]">{generation}</span>
        </div>
      </div>
    </div>
  );
}
