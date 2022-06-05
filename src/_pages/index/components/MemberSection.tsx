import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import QuoteCard from './QuoteCard';

export default function MemberSection() {
  return (
    <div className="px-[20px] pt-[40px] pb-[80px]">
      <h1 className="text-[24px] font-bold leading-[34px] text-gray-900">
        우리는 대학생이지만 -<br />
        전문가가 될 수 있다!
      </h1>

      <section className="mt-[40px] flex flex-col gap-y-[24px]">
        <QuoteCard />
        <QuoteCard />
      </section>

      <div className="flex justify-center">
        <button
          type="button"
          className="mt-[36px] flex items-center gap-x-[8px] rounded-[20px] bg-primary py-[6px] px-[48px] text-[14px] font-bold leading-[36px] text-white"
        >
          AUSG 멤버 더 살펴보기
          <ArrowRightIcon className="h-[24px] w-[24px] text-white" />
        </button>
      </div>
    </div>
  );
}
