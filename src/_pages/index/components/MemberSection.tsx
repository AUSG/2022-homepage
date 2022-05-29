import React from 'react';
import QuoteCard from './QuoteCard';
import ArrowRightIcon from 'public/icons/arrow_right.svg';

type Props = {};

export default function MemberSection({}: Props) {
  return (
    <div className="px-[20px] pt-[40px] pb-[80px]">
      <h1 className="text-[28px] font-bold leading-[36px] text-gray-900">
        우리는 대학생이지만 -<br />
        전문가가 될 수 있다!
      </h1>

      <section className="mt-[40px] flex flex-col gap-y-[24px]">
        <QuoteCard />
        <QuoteCard />
      </section>

      <div className="flex justify-center">
        <button className="mt-[60px] flex items-center gap-x-[8px] rounded-[20px] bg-primary py-[6px] px-[48px] text-[14px] font-bold leading-[36px] text-white">
          AUSG 멤버 더 살펴보기
          <ArrowRightIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}
