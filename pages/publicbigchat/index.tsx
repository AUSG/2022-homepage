import { Fragment, useState } from 'react';
import Head from 'next/head';

import Header from '@/src/components/Header';

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
  const registrationLink = '';

  // 타임테이블 데이터
  const timeTableData = [
    {
      id: 'keynote',
      time: '19:00',
      period: '오후',
      title: 'Keynote',
      subtitle: '',
      presenter: '도정민 (9기 Organizer)',
    },
    {
      id: 'programming',
      time: '19:20',
      period: '오후',
      title: 'Unpopular opinions',
      subtitle: '개발 상식에 반기 들기',
      presenter: ' 문성혁(AUSG 3기, 쿠팡 Sr. Back-end Engineer)',
    },
    {
      id: 'kubernetes',
      time: '20:30',
      period: '오후',
      title: '홈서버 위에서 쿠버네티스 기반 호스팅 서비스 만들기',
      subtitle: '홈서버 환경을 바탕으로 Platform As A Service 만들어보기',
      presenter: '김보겸(AUSG 8기, Lablup Software Engineer)',
    },
    {
      id: 'platform',
      time: '19:55',
      period: '오후',
      title: 'Platform Engineering의 함정',
      subtitle:
        "'Magic Button'이 만들어내는 장밋빛 환상, 성공적인 Platform Engineering 도입의 숨겨진 방해 요소에 대해 같이 이야기해봐요",
      presenter: '안지완(AUSG 8기, 몰로코 Software Engineer)',
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
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              경험과 노하우를 공유하는 PUBLIC BIG CHAT
            </h1>
            <p className="mb-6 text-xl">
              다양한 분야의 AUSG 멤버들이 한 데 모여 클라우드 개발 경험과
              노하우를 공유해요.
            </p>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-6 py-3 font-bold text-primary shadow-lg transition-colors hover:bg-gray-50"
            >
              참가 신청하기
            </a>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-primary">
              이번 Public Big Chat 타임테이블
            </h2>

            <div className="mb-16 rounded-3xl bg-primary bg-opacity-10 p-6 shadow-lg">
              {timeTableData.map(session => (
                <div
                  key={session.id}
                  className={`rounded-2xl border-2 border-primary border-opacity-20 bg-white p-5 shadow-sm ${
                    session.id !== timeTableData[timeTableData.length - 1].id
                      ? 'mb-4'
                      : ''
                  }`}
                >
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="min-w-[100px] rounded-xl bg-primary p-4 text-center text-white">
                      <div className="text-sm">{session.period}</div>
                      <div className="text-2xl font-bold">{session.time}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-bold text-primary">
                        {session.title}
                      </h3>
                      <div className="mb-2">
                        <span className="text-base font-medium text-gray-700">
                          {session.presenter}
                        </span>
                      </div>
                      {session.subtitle && (
                        <p className="text-sm italic text-gray-600">
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
              <h2 className="mb-8 text-center text-2xl font-bold text-primary">
                역대 Public Big Chat 발표 모음
              </h2>

              {/* 연도 선택 탭 */}
              <div className="mb-8 flex justify-center overflow-x-auto">
                <div className="inline-flex rounded-full bg-primary bg-opacity-10 p-1 shadow-md">
                  {Object.keys(presentationsByYear).map(year => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setSelectedYear(year)}
                      className={`rounded-full px-6 py-2 font-medium transition-colors ${
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
                      className="rounded-xl border-l-4 border-primary bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-primary">
                            {presentation.title}
                          </h3>
                          <div className="mb-2">
                            <span className="text-base font-medium text-gray-700">
                              {presentation.presenter}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <span className="text-sm text-gray-500">
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
