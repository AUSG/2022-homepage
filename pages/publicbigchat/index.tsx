import { Fragment, useState } from 'react';
import Head from 'next/head';

import Header from '@/src/components/Header';
import { BIGCHAT_CONFIG } from '@/src/constants/config';

interface Presentation {
  title: string;
  presenter: string;
  date: string;
}

interface PresentationsByYear {
  [year: string]: Presentation[];
}

const BigChat = () => {
  // 선택된 연도 상태 관리
  const [selectedYear, setSelectedYear] = useState('2024');

  // 밋업으로 이동
  const registrationLink = BIGCHAT_CONFIG.url;

  // 이벤트 정보 데이터
  const eventInfo = {
    date: '2025년 6월 26일 (토)',
    time: '오후 6시 50분 ~ 8시 40분',
    location: 'AWS Korea',
    locationDetail: '서울 강남구 테헤란로 231 센터필드 EAST 18층',
  };

  // 타임테이블 데이터
  const timeTableData = [
    {
      id: '1',
      time: '18:50',
      period: '',
      title: 'Keynote',
      subtitle: '',
      presenter: '도정민 (9기 Organizer)',
    },
    {
      id: '2',
      time: '19:05',
      period: '세션1',
      title: 'Unpopular opinions',
      subtitle: '개발 상식에 반기 들기',
      presenter: ' 문성혁\n(AUSG 3기, 쿠팡 Sr. Back-end Engineer)',
    },
    {
      id: '3',
      time: '19:40',
      period: '세션2',
      title: '홈서버 위에서 쿠버네티스 기반\n 호스팅 서비스 만들기',
      subtitle: '홈서버 환경을 바탕으로 Platform As A Service 만들어보기',
      presenter: '김보겸\n(AUSG 8기, Lablup Software Engineer)',
    },
    {
      id: '4',
      time: '20:10',
      period: '세션3',
      title: 'Platform Engineering의 함정',
      subtitle:
        "'Magic Button'이 만들어내는 장밋빛 환상, 성공적인 Platform Engineering 도입의 숨겨진 방해 요소에 대해 같이 이야기해봐요",
      presenter: '안지완\n(AUSG 8기, 몰로코 Software Engineer)',
    },
  ];

  // 연도별 발표 데이터
  const presentationsByYear: PresentationsByYear = {
    '2024': [
      {
        title: 'group by 톺아보기',
        presenter: '이태현 (당근마켓)',
        date: '2024년 6월 24일',
      },
      {
        title: '배포 자동화, 어디까지 해보셨나요?',
        presenter: '강시온 (Lablup Inc)',
        date: '2024년 6월 24일',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>AUSG - BigChat</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* AUSG Header */}
        <div className="md:mx-auto md:max-w-screen-xl">
          <Header />
        </div>

        {/* 헤더 섹션 */}
        <header className="bg-primary px-4 py-12 text-white">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-2xl font-bold md:text-4xl">
              경험과 노하우를 공유하는
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              PUBLIC BIGCHAT 🚀
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              다양한 분야의 AUSG 멤버들이 한 데 모여
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              클라우드 개발 경험과 노하우를 공유해요.
            </p>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-6 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-gray-50"
            >
              신청하기
            </a>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            {/* 이벤트 정보 카드 */}
            <div className="mb-12">
              <div className="rounded-3xl border-2 border-primary border-opacity-30 bg-white/90 p-8 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary hover:border-opacity-50 hover:shadow-xl">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* 날짜 및 시간 정보 */}
                  <div className="flex items-center space-x-4">
                    <div className="flex aspect-square h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-primary border-opacity-30 bg-primary bg-opacity-10">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary md:text-lg">
                        일시
                      </h3>
                      <p className="text-base md:text-lg">{eventInfo.date}</p>
                      <p className="text-sm text-gray-600 md:text-base">
                        {eventInfo.time}
                      </p>
                    </div>
                  </div>

                  {/* 위치 정보 */}
                  <div className="flex items-center space-x-4">
                    <div className="flex aspect-square h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-primary border-opacity-30 bg-primary bg-opacity-10">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary md:text-lg">
                        장소
                      </h3>
                      <p className="text-base md:text-lg">
                        {eventInfo.location}
                      </p>
                      <p className="text-sm text-gray-600 md:text-base">
                        {eventInfo.locationDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mb-8 text-center text-xl font-bold text-primary md:text-2xl">
              이번 PUBLIC BIGCHAT 타임테이블
            </h2>

            <div className="mb-16 rounded-3xl bg-primary bg-opacity-10 p-4 shadow-lg md:p-6">
              {timeTableData.map(session => (
                <div
                  key={session.id}
                  className={`rounded-2xl border-2 border-primary border-opacity-20 bg-white p-4 shadow-sm md:p-5 ${
                    session.id !== timeTableData[timeTableData.length - 1].id
                      ? 'mb-4'
                      : ''
                  }`}
                >
                  <div className="flex flex-row items-center gap-3 md:gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-center text-white md:h-24 md:w-24">
                      <div className="text-xs md:text-sm">{session.period}</div>
                      <div className="text-sm font-bold md:text-2xl">
                        {session.time}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 whitespace-pre-line text-base font-bold text-primary md:whitespace-normal md:text-xl">
                        {session.title}
                      </h3>
                      <div className="mb-2">
                        <span className="whitespace-pre-line text-xs font-medium text-gray-700 md:whitespace-normal md:text-base">
                          {session.presenter}
                        </span>
                      </div>
                      {session.subtitle && (
                        <p className="text-sm italic text-gray-800 md:text-base">
                          {session.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 역대 발표 섹션 */}
            <div className="mt-16">
              <h2 className="mb-8 text-center text-xl font-bold text-primary md:text-2xl">
                역대 PUBLIC BIGCHAT 발표
              </h2>

              {/* 연도 선택 탭 */}
              <div className="mb-8 flex justify-center overflow-x-auto">
                <div className="inline-flex rounded-full bg-primary bg-opacity-10 p-1 shadow-md">
                  {Object.keys(presentationsByYear).map(year => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setSelectedYear(year)}
                      className={`rounded-full px-4 py-1 text-sm font-medium transition-colors md:px-6 md:py-2 md:text-base ${
                        selectedYear === year
                          ? 'bg-primary text-white'
                          : 'text-primary hover:bg-primary hover:bg-opacity-20'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* 선택된 연도의 발표 목록 */}
              <div className="rounded-3xl bg-primary bg-opacity-10 p-6 shadow-lg">
                <div className="space-y-4">
                  {presentationsByYear[selectedYear]?.map(presentation => (
                    <div
                      key={`${selectedYear}-${presentation.title}`}
                      className="rounded-xl border-l-4 border-primary bg-white p-3 shadow-sm transition-shadow hover:shadow-md md:p-4"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-base font-bold text-primary md:text-lg">
                            {presentation.title}
                          </h3>
                          <div className="mb-2">
                            <span className="text-sm font-medium text-gray-700 md:text-base">
                              {presentation.presenter}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <span className="text-xs text-gray-500 md:text-sm">
                            {presentation.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
      </div>
    </>
  );
};

export default BigChat;
