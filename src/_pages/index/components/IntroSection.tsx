import Header from '@/components/Header';
import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import CloudIcon from 'public/icons/cloud.svg';

export default function IntroSection() {
  return (
    <div className="bg-primary">
      <Header />
      <main className="flex flex-col overflow-hidden px-[20px] pb-[38px] pt-[30px]">
        <div className="flex items-center">
          <h1 className="mt-[8px] text-[28px] font-bold text-white">
            대학생 개발자를 위한
            <br />
            클라우드 커뮤니티
          </h1>
        </div>

        <CloudIcon className="right-[-40px] h-[235px] w-[337px]" />

        <section className="flex flex-col items-center">
          <p className="mt-[6px] text-white">
            클라우드 컴퓨팅에 관심 있는 개발자라면?
          </p>
          <button
            type="button"
            className="mt-[8px] flex items-center gap-[8px] rounded-[20px] bg-white py-[6px] px-[48px] font-bold leading-[36px]"
          >
            AUSG 6기 지원하기
            <ArrowRightIcon />
          </button>
        </section>
      </main>
    </div>
  );
}
