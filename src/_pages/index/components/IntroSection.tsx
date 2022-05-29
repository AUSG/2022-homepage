import Header from '@/components/Header';
import React from 'react';

type Props = {};

export default function IntroSection({}: Props) {
  return (
    <div className="bg-primary">
      <Header />
      <main className="px-[20px] pb-[36px]">
        {/* TODO: replace with logo */}
        <h1 className="mt-[33px] text-white">AUSG</h1>
        <h1 className="mt-[8px] text-[28px] font-bold text-white">
          대학생 개발자를 위한
          <br />
          클라우드 커뮤니티
        </h1>

        <section className="flex flex-col items-center">
          <p className="mt-[52px] text-white">
            클라우드 컴퓨팅에 관심 있는 개발자라면?
          </p>
          <button className="mt-[8px] rounded-[20px] bg-white py-[6px] px-[48px] font-bold leading-[36px]">
            {/* TODO: add icon right of button */}
            AUSG 6기 지원하기
          </button>
          <span className="mt-[96px] text-[14px] text-white underline underline-offset-[6px]">
            AUSG 소식 구독하기
          </span>
        </section>
      </main>
    </div>
  );
}
