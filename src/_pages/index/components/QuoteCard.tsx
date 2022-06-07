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
    <div className="rounded-[20px] bg-gray-100 px-[30px] pt-[40px] pb-[20px] xl:px-[40px] xl:py-[44px]">
      <QuoteIcon className="fill-primary xl:h-[37px] xl:w-[44px]" />
      <div className="leading-22px mt-[12px] whitespace-pre-line xl:mt-[36px] xl:text-[18px] xl:leading-[28px]">
        {content}
      </div>
      <div className="mt-[26px] flex items-center xl:mt-[36px]">
        <div className="mr-[8px] h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full xl:mr-[30px] xl:h-[60px] xl:w-[60px]">
          <Image src={imagePath} width="100%" height="100%" alt="" />
        </div>
        <div className="text-[14px] leading-[18px] xl:leading-[24px]">
          <strong>{profile}</strong>
          <br />
          <span className="text-[12px]">{generation}</span>
        </div>
      </div>
    </div>
  );
}
