import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Header from '@/src/components/Header';
import { event } from '@/src/lib/gtag';
import { getRecruitmentStatus } from '@/src/utils/check-status';
import { RECRUITMENT_CONFIG } from '@/src/constants/config';

export default function Apply() {
  const [isClient, setIsClient] = useState(false);

  const {
    isApplyPeriod,
    isBeforeApply,
    isAfterApply,
    generation,
    applyDeadline,
  } = getRecruitmentStatus();

  useEffect(() => {
    setIsClient(true);

    // Google Analytics 페이지 뷰 이벤트
    event({
      action: 'page_view',
      category: 'apply',
      label: `AUSG ${generation}기 지원 페이지`,
      value: 1,
    });
  }, [generation]);

  const handleFormLoad = () => {
    // Tally 폼 로드 이벤트
    event({
      action: 'tally_form_load',
      category: 'apply',
      label: `AUSG ${generation}기 지원 폼 로드`,
      value: 1,
    });
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-primary">
        <Header theme="colored" />
        <main className="flex min-h-[calc(100vh-120px)] items-center justify-center">
          <div className="text-xl text-white">로딩 중...</div>
        </main>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`AUSG ${generation}기 지원하기`}
        description={`AUSG ${generation}기 모집에 지원해보세요! 대학생 개발자를 위한 클라우드 커뮤니티 AUSG에서 함께 성장하실 분을 찾습니다.`}
        openGraph={{
          title: `AUSG ${generation}기 지원하기`,
          description: `AUSG ${generation}기 모집에 지원해보세요! 대학생 개발자를 위한 클라우드 커뮤니티 AUSG에서 함께 성장하실 분을 찾습니다.`,
          type: 'website',
          url: 'https://ausg.me/apply',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <div className="min-h-screen bg-primary">
        <Header theme="colored" />

        <main className="px-[20px] py-[40px] md:mx-auto md:max-w-screen-xl">
          <div className="mb-[40px] text-center">
            <h1 className="mb-4 text-[32px] font-bold text-white md:text-[48px]">
              AUSG {generation}기 지원하기
            </h1>
          </div>

          {/* 우리가 찾는 인재상 섹션 */}
          <div className="mb-[60px]">
            <h2 className="mb-8 text-center text-[28px] font-bold text-white md:text-[36px]">
              함께 성장할 멤버를 <br className="md:hidden" />
              찾고 있어요.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* 박스 1 */}
              <div className="group rounded-xl border-2 border-white/30 bg-white p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/95 md:p-8">
                <div className="mb-4 text-4xl md:text-5xl">🚀</div>
                <h3 className="mb-3 text-[18px] font-bold text-primary/80 md:text-[20px]">
                  성장과 배움에 열정적인 사람
                </h3>
                <p className="text-primary/65 text-[13px] leading-relaxed md:text-[14px]">
                  새로운 기술을 배우는데 겁내지 않고,
                  <br />
                  지속적으로 발전하려는 의지가 있는 분
                </p>
              </div>

              {/* 박스 2 */}
              <div className="group rounded-xl border-2 border-white/30 bg-white p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/95 md:p-8">
                <div className="mb-4 text-4xl md:text-5xl">🤝</div>
                <h3 className="mb-3 text-[18px] font-bold text-primary/80 md:text-[20px]">
                  지식 공유와 소통에 적극적인 사람
                </h3>
                <p className="text-primary/65 text-[13px] leading-relaxed md:text-[14px]">
                  함께 성장하며 서로의 경험을 나누는 것을 즐기는 분
                </p>
              </div>

              {/* 박스 3 */}
              <div className="group rounded-xl border-2 border-white/30 bg-white p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/95 md:p-8">
                <div className="mb-4 text-4xl md:text-5xl">💻</div>
                <h3 className="mb-3 text-[18px] font-bold text-primary/80 md:text-[20px]">
                  기술을 즐기는 사람
                </h3>
                <p className="text-primary/65 text-[13px] leading-relaxed md:text-[14px]">
                  개발과 기술에 대한 순수한 흥미와 재미를 느끼는 분
                </p>
              </div>
            </div>
          </div>

          {!isApplyPeriod ? (
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 text-center">
              <div className="mb-4 text-6xl">⏰</div>
              <h2 className="mb-4 text-[28px] font-bold text-gray-800">
                {isBeforeApply
                  ? `${generation}기 지원이 아직 시작되지 않았습니다`
                  : `${generation}기 지원이 마감되었습니다`}
              </h2>
              <p className="mb-6 text-[18px] text-gray-600">
                {isBeforeApply
                  ? `지원 시작: ${RECRUITMENT_CONFIG.openDate.format(
                      'YYYY년 MM월 DD일 HH:mm'
                    )}`
                  : `지원 마감: ${applyDeadline.format(
                      'YYYY년 MM월 DD일 HH:mm'
                    )}`}
              </p>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="rounded-lg bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary/90"
              >
                홈으로 돌아가기
              </button>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl space-y-3">
              {/* 지원서 작성 헤더 - 투명한 스타일 */}
              <div className="p-6 text-center">
                <h2 className="mb-2 text-[24px] font-bold text-white">
                  지원서 작성
                </h2>
                <p className="text-white/80">
                  마감일: {applyDeadline.format('YYYY년 MM월 DD일 HH:mm')}
                </p>
              </div>

              {/* Tally 폼 */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative" style={{ height: '800px' }}>
                  <iframe
                    src={RECRUITMENT_CONFIG.tallyFormUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title={`AUSG ${generation}기 지원서`}
                    onLoad={handleFormLoad}
                    className="border-none"
                  >
                    로딩 중...
                  </iframe>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-[14px] text-white/60">
              문의사항이 있으시면{' '}
              <Link href="/contact">
                <a className="text-white underline hover:text-white/80">
                  Contact
                </a>
              </Link>{' '}
              페이지를 참고해주세요.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
