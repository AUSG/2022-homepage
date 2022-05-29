import Header from '@/components/Header';
import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import MainArrowIcon from 'public/icons/main_arrow.svg';

type Props = {};

export default function IntroSection({}: Props) {
  return (
    <div className="bg-primary">
      <Header />
      <main className="px-[20px] pb-[36px]">
        {/* TODO: replace with logo */}
        <h1 className="mt-[33px] text-white">AUSG</h1>
        <div className="flex items-center">
          <h1 className="mt-[8px] text-[28px] font-bold text-white">
            대학생 개발자를 위한
            <br />
            클라우드 커뮤니티
          </h1>
          <MainArrowIcon className="pt-[6px]" />
        </div>

        <section className="flex flex-col items-center">
          <p className="mt-[52px] text-white">
            클라우드 컴퓨팅에 관심 있는 개발자라면?
          </p>
          <button className="mt-[8px] flex items-center gap-[8px] rounded-[20px] bg-white py-[6px] px-[48px] font-bold leading-[36px]">
            AUSG 6기 지원하기
            <ArrowRightIcon />
          </button>
          <span className="mt-[96px] text-[14px] text-white underline underline-offset-[6px]">
            AUSG 소식 구독하기
          </span>
        </section>
      </main>
    </div>
  );
}
