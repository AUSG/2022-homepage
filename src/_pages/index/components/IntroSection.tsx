import Header from '@/src/components/Header';
import React, { useEffect, useState } from 'react';
import CloudImage from 'public/images/cloud.svg';
import CloudTruncatedImage from 'public/images/cloud-truncated.svg';
import { useRouter } from 'next/router';
import { event } from '@/src/lib/gtag';
import useCountdown from '@/src/_pages/hooks/useCountdown';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function IntroSection() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const targetDate = dayjs('2024-06-27 23:59:59').tz('Asia/Seoul').toDate(); // 8기 지원 마감일 (KST)
  const krCurrentDate = dayjs().tz('Asia/Seoul').toDate(); // 한국 시간 기준 현재 시간

  const isClosed = krCurrentDate > targetDate;

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  const handleApplyClick = () => {
    event({
      action: 'apply',
      category: 'click',
      label: 'AUSG 8기 지원하기',
      value: 1,
    });
    router.push('/apply');
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                {isClosed ? '8기 모집이 마감되었습니다.' : '☁️ 8기 모집중 ☁️'}
              </p>
              {isClosed ? null : (
                <button
                  type="button"
                  onClick={handleApplyClick}
                  className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary duration-200 hover:bg-white/90"
                >
                  지원하기
                </button>
              )}
            </div>
            {isClosed ? null : (
              <div className="hidden items-center gap-4 md:flex">
                <p className="text-[18px] font-bold text-white md:text-[24px]">
                  {isClient
                    ? `🔥 지원 마감까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 🔥`
                    : null}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="-mx-[20px] mt-[18px] flex justify-end md:hidden">
          <CloudTruncatedImage
            width="80%"
            height="100%"
            className="right-0 animate-floating transition-[translate]"
          />
        </div>
        <div className="mt-[24px] flex flex-col items-center justify-center gap-4 md:hidden">
          <div className="flex gap-4">
            <p className="text-[28px] font-bold text-white md:text-center md:text-[40px]">
              {isClosed ? '8기 모집이 마감되었습니다.' : '☁️ 8기 모집중 ☁️'}
            </p>
            {isClosed ? null : (
              <button
                type="button"
                onClick={handleApplyClick}
                className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary hover:bg-white/90"
              >
                지원하기
              </button>
            )}
          </div>
          {isClosed ? null : (
            <div className="flex items-center gap-4 md:hidden">
              <p className="text-[18px] font-bold text-white md:text-[24px]">
                {isClient
                  ? `🔥지원 마감까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초🔥`
                  : null}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
