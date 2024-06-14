import Header from '@/src/components/Header';
import React from 'react';
import CloudImage from 'public/images/cloud.svg';
import CloudTruncatedImage from 'public/images/cloud-truncated.svg';
import { useRouter } from 'next/router';

export default function IntroSection() {
  const router = useRouter();

  return (
    <div className="bg-primary">
      <Header theme="colored" />
      <main className="flex flex-col overflow-hidden px-[20px] pb-[38px] pt-[30px] md:mx-auto md:max-w-screen-xl md:py-0">
        <div className="flex items-center md:py-10">
          <div className="hidden flex-1 md:mt-24 md:block">
            <CloudImage
              width="100%"
              height="100%"
              className="animate-floating"
            />
          </div>
          <div className="mt-[8px] flex flex-col items-center md:min-w-[400px] md:flex-1">
            <h1 className="text-[28px] font-bold text-white md:text-center md:text-[48px]">
              대학생 개발자를 위한
              <br />
              클라우드 커뮤니티
            </h1>
            <div className="mt-[24px] hidden items-center gap-4 md:flex">
              <p className="text-[28px] font-bold text-white md:text-center md:text-[40px]">
                ☁️ 11기 모집중 ☁️
              </p>
              <button
                type="button"
                onClick={() => {
                  router.push('/apply');
                }}
                className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary hover:bg-white/90"
              >
                지원하기
              </button>
            </div>
          </div>
        </div>

        <div className="-mx-[20px] mt-[18px] flex justify-end md:hidden">
          <CloudTruncatedImage
            width="80%"
            height="100%"
            className="right-0 animate-floating transition-[translate]"
          />
        </div>
        <div className="mt-[24px] flex items-center justify-center gap-4 md:hidden">
          <p className="text-[28px] font-bold text-white md:text-center md:text-[40px]">
            ☁️ 11기 모집중 ☁️
          </p>
          <button
            type="button"
            onClick={() => {
              router.push('/apply');
            }}
            className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary hover:bg-white/90"
          >
            지원하기
          </button>
        </div>
      </main>
    </div>
  );
}
