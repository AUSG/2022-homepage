import Header from '@/components/Header';
import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import CloudImage from 'public/images/cloud.svg';
import CloudTruncatedImage from 'public/images/cloud-truncated.svg';

export default function IntroSection() {
  return (
    <div className="bg-primary">
      <Header theme="colored" />
      <main className="flex flex-col overflow-hidden px-[20px] pb-[38px] pt-[30px] md:mx-auto md:max-w-screen-xl md:py-0">
        <div className="flex items-center md:py-10">
          <div className="hidden flex-1 md:mt-24 md:block">
            <CloudImage
              width="full"
              height="full"
              className="animate-floating transition-[translate]"
            />
          </div>
          <div className="mt-[8px] flex min-w-[400px] flex-col items-center md:flex-1">
            <h1 className="text-[28px] font-bold text-white md:text-center md:text-[48px]">
              대학생 개발자를 위한
              <br />
              클라우드 커뮤니티
            </h1>
            <div className="hidden flex-col items-center md:flex">
              <p className="mt-[60px] text-[24px] text-white">
                클라우드 컴퓨팅에 관심 있는 개발자라면?
              </p>
              <a
                href="https://tally.so/r/3NpX7l"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mt-[36px] flex items-center rounded-[20px] bg-white px-[48px]"
                >
                  <span className="mr-[8px] font-bold leading-[60px]">
                    AUSG 6기 지원하기
                  </span>
                  <ArrowRightIcon className="h-[24px] w-[24px] fill-black" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="-mx-[20px] mt-[18px] flex justify-end md:hidden">
          <CloudTruncatedImage
            width="80%"
            height="full"
            className="right-0 animate-floating transition-[translate]"
          />
        </div>

        <section className="flex flex-col items-center md:hidden">
          <p className="mt-[6px] text-white">
            클라우드 컴퓨팅에 관심 있는 개발자라면?
          </p>
          <a href="https://tally.so/r/3NpX7l" target="_blank" rel="noreferrer">
            <button
              type="button"
              className="mt-[8px] flex items-center rounded-[20px] bg-white py-[6px] px-[48px]"
            >
              <span className="mr-[8px] font-bold leading-[36px]">
                AUSG 6기 지원하기
              </span>
              <ArrowRightIcon className="h-[24px] w-[24px] fill-black" />
            </button>
          </a>
        </section>
      </main>
    </div>
  );
}
