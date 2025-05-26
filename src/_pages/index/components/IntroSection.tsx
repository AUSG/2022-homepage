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
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  // 이메일 입력창 토글 변수
  const showEmailInput = true; // true: 보이기, false: 숨기기

  const applyOpenDate = dayjs('2025-06-13 00:00:00')
    .tz('Asia/Seoul')
    .toDate();
  const applyDeadlineDate = dayjs('2025-06-30 23:59:59')
    .tz('Asia/Seoul')
    .toDate(); // 8기 지원 마감일 (KST)
  const bigchatDeadlineDate = dayjs('2025-06-23 23:59:59')
    .tz('Asia/Seoul')
    .toDate(); // 퍼블릭 빅챗 마감일 (KST)

  const krCurrentDate = dayjs().tz('Asia/Seoul').toDate(); // 한국 시간 기준 현재 시간

  const isApplyClosed = (krCurrentDate > applyDeadlineDate) || (krCurrentDate < applyOpenDate);
  const isBigchatClosed = krCurrentDate > bigchatDeadlineDate;

  const [days, hours, minutes, seconds] = useCountdown(applyDeadlineDate);

  const handleApplyClick = () => {
    event({
      action: 'apply',
      category: 'click',
      label: 'AUSG 8기 지원하기',
      value: 1,
    });
    router.push('/apply');
  };

  const handleBigchatClick = () => {
    event({
      action: 'public-bigchat',
      category: 'click',
      label: '퍼블릭 빅챗 참여하기',
      value: 1,
    });
    router.push('https://umoh.io/ausg-public-bigchat');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // 여기에 이메일 전송 로직 추가
      console.log('이메일 등록:', email);
      
      // 토스트 표시
      setShowToast(true);
      setEmail(''); // 입력창 초기화
      
      // 3초 후 토스트 숨기기
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
      // Google Analytics 이벤트 추가
      event({
        action: 'email_signup',
        category: 'engagement',
        label: '9기 모집 알림 신청',
        value: 1,
      });
    }
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

              {isApplyClosed ? null : (
                <button
                  type="button"
                  onClick={handleApplyClick}
                  className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary duration-200 hover:bg-white/90"
                >
                  지원하기
                </button>
              )}
            </div>
                          {isApplyClosed && showEmailInput && (
                <div className="mt-6 hidden flex-col items-center gap-6 md:flex">
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-[26px] font-bold text-white">
                      9기 모집 시작 알림을 받고 싶다면?
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex items-center gap-3">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="이메일을 입력해주세요"
                          className="bg-transparent px-2 py-2 text-white placeholder-white/70 border-0 border-b-2 border-white/50 focus:outline-none focus:border-white transition-colors duration-200 min-w-[280px]"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded-full bg-white px-6 py-2 text-[16px] font-bold text-primary duration-200 hover:bg-white/90"
                      >
                        알림 신청
                      </button>
                    </form>
                  </div>
                </div>
              )}
            {isApplyClosed ? null : (
              <div className="hidden items-center gap-4 md:flex md:flex-col">
                <p className="text-[18px] font-bold text-white md:text-[24px]">
                  {isClient
                    ? `🔥 지원 마감까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 🔥`
                    : null}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[18px] font-bold text-white md:text-[24px]">
                    {isBigchatClosed ? null : 'AUSG이 궁금하다면?'}
                  </p>
                  {isBigchatClosed ? null : (
                    <button
                      type="button"
                      onClick={handleBigchatClick}
                      className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary duration-200 hover:bg-white/90"
                    >
                      퍼블릭 빅챗 참여하기
                    </button>
                  )}
                </div>
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
        <div className="mt-[24px] flex flex-col flex-wrap items-center justify-center gap-4 md:hidden">
          <div className="flex items-center gap-4">

            {isApplyClosed ? null : (
              <button
                type="button"
                onClick={handleApplyClick}
                className="shrink-0 rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary hover:bg-white/90"
              >
                지원하기
              </button>
            )}
          </div>
                      {isApplyClosed && showEmailInput && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 w-full">
                  <p className="text-[26px] font-bold text-white text-center">
                    9기 모집 시작 알림을 받고 싶다면?
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-3 w-full max-w-[280px]">
                    <div className="relative w-full">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일을 입력해주세요"
                        className="w-full bg-transparent px-2 py-2 text-[16px] text-white placeholder-white/70 border-0 border-b-2 border-white/50 focus:outline-none focus:border-white transition-colors duration-200 text-center"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-full bg-white px-6 py-2 text-[14px] font-bold text-primary duration-200 hover:bg-white/90"
                    >
                      알림 신청
                    </button>
                  </form>
                </div>
              </div>
            )}
          {isApplyClosed ? null : (
            <div className="flex items-center gap-4 md:hidden">
              <p className="text-[18px] font-bold text-white md:text-[24px]">
                {isClient
                  ? `🔥지원 마감까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초🔥`
                  : null}
              </p>
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[18px] font-bold text-white md:text-[24px]">
              {isBigchatClosed ? null : 'AUSG이 궁금하다면?'}
            </p>
            {isBigchatClosed ? null : (
              <button
                type="button"
                onClick={handleBigchatClick}
                className="rounded-md bg-white px-6 py-2 text-[18px] font-bold text-primary duration-200 hover:bg-white/90"
              >
                퍼블릭 빅챗 참여하기
              </button>
            )}
          </div>
        </div>
      </main>
      
      {/* 토스트 알림 */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out max-w-[90vw]">
          <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-lg border border-gray-200 whitespace-nowrap">
            <span className="text-green-500 text-lg">🎉</span>
            <span className="text-gray-800 font-medium text-sm md:text-base">알림 신청이 완료되었습니다!</span>
          </div>
        </div>
      )}
    </div>
  );
}
