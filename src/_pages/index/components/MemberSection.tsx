import React from 'react';
// import ArrowRightIcon from 'public/icons/arrow_right.svg';
import QUOTES from '@/constants/quotes';
import QuoteCard from './QuoteCard';

export default function MemberSection() {
  return (
    <div className="px-[20px] pt-[40px] pb-[80px] md:mx-auto md:max-w-screen-xl xl:py-[100px]">
      <h1 className="text-[24px] font-bold leading-[34px] text-gray-900 xl:text-[36px] xl:leading-[52px]">
        우리는 대학생이지만 - <br className="xl:hidden" />
        전문가가 될 수 있다!
      </h1>

      <section
        className="my-[36px] flex flex-col gap-y-[24px]
          md:mt-[60px] md:block md:columns-2 md:gap-x-[48px] xl:gap-x-[60px]"
      >
        {QUOTES.map(props => (
          <div
            key={props.profile}
            className="md:mb-[24px] md:break-inside-avoid-column"
          >
            <QuoteCard {...props} />
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        {/* TODO: member 페이지 개발 후 주석 해제하기 */}
        {/* <button
          type="button"
          className="mt-[36px] flex items-center gap-x-[8px] rounded-[20px] bg-primary py-[6px] px-[48px] text-[14px] font-bold leading-[36px] text-white"
        >
          AUSG 멤버 더 살펴보기
          <ArrowRightIcon className="h-[24px] w-[24px] text-white" />
        </button> */}
      </div>
    </div>
  );
}
