import React from 'react';
import QuoteIcon from 'public/icons/quote.svg';

export default function QuoteCard() {
  return (
    <div className="rounded-[20px] bg-gray-100 px-[30px] pt-[40px] pb-[20px] xl:px-[40px] xl:py-[44px]">
      <QuoteIcon className="fill-primary xl:h-[37px] xl:w-[44px]" />
      <div className="leading-22px mt-[12px] xl:mt-[36px] xl:text-[18px] xl:leading-[28px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
      <div className="mt-[26px] flex items-center xl:mt-[36px]">
        <img
          src="images/profile-1.png"
          className="mr-[8px] h-[48px] w-[48px] shrink-0 xl:mr-[30px]"
          alt=""
        />
        <div className="text-[14px] leading-[18px] xl:leading-[24px]">
          <strong>현 마켓컬리 엔지니어 김민태</strong>
          <br />
          <span className="text-[12px]">AUSG 4기</span>
        </div>
      </div>
    </div>
  );
}
