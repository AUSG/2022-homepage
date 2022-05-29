import React from 'react';
import QuoteIcon from 'public/icons/quote.svg';

type Props = {};

export default function QuoteCard({}: Props) {
  return (
    <div className="rounded-[20px] bg-gray-100 px-[30px] pt-[40px] pb-[20px]">
      <QuoteIcon className="text-primary" />
      <div className="leading-22px mt-[12px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="mt-[26px] flex items-center">
        <img
          src="images/profile-1.png"
          className="mr-[8px] h-[48px] w-[48px] shrink-0"
        />
        <div className="text-[14px] leading-[18px]">
          <strong>현 마켓컬리 엔지니어 김민태</strong>
          <br />
          <span className="text-[12px]">AUSG 4기</span>
        </div>
      </div>
    </div>
  );
}
