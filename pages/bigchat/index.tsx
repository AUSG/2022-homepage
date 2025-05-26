import { Fragment, useState } from 'react';
import Head from 'next/head';

import Header from '@/src/components/Header';

const BigChat = () => {
  // 선택된 연도 상태 관리
  const [selectedYear, setSelectedYear] = useState("2024");

  // 링크 관리
  const registrationLink = "https://umoh.io/ko/ausg-public-bigchat";

  // 타임테이블 데이터
  const timeTableData = [
    {
      time: "16:10",
      period: "오후",
      title: "Keynote",
      subtitle: "",
      presenter: "도정민 (9기 Organizer)",
    },
    {
      time: "16:20",
      period: "오후", 
      title: "프로그래밍의 상식에 반박하기",
      subtitle: "당연하다고 생각했던 것들에 대한 새로운 관점",
      presenter: "문성혁 (Coupang)",
    },
    {
      time: "16:55",
      period: "오후",
      title: "Platform Engineering의 함정",
      subtitle: "당신이 몰랐던 Platform Engineering의 함정",
      presenter: "안지완 (몰로코)",
    },
    {
      time: "17:35",
      period: "오후",
      title: "홈서버 위에서 쿠버네티스 기반 호스팅 서비스 만들기",
      subtitle: "좌충우돌 쿠버네티스 홈서버 호스팅 서비스 만들기",
      presenter: "김보겸 (Lablup Inc)",
    }
  ];

  // 연도별 발표 데이터  
  const presentationsByYear = {
    "2024": [
      {
        title: "group by 톺아보기",
        presenter: "이태현 (당근마켓)",
        date: "2024년 6월 24일",
      },
      {
        title: "배포 자동화, 어디까지 해보셨나요?",
        presenter: "강시온 (Lablup Inc)",
        date: "2024년 6월 24일",
      }
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
        <header className="bg-primary text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              경험과 노하우를 공유하는 PUBLIC BIG CHAT
            </h1>
            <p className="text-xl mb-6">
              다양한 분야의 AUSG 멤버들이 한 데 모여 클라우드 개발 경험과 노하우를 공유해요.
            </p>
            <a 
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors"
            >
              참가 신청하기
            </a>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">이번 Public Big Chat 타임테이블</h2>

            <div className="bg-primary bg-opacity-10 rounded-3xl p-6 shadow-lg mb-16">
              {timeTableData.map((session, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-5 shadow-sm border-2 border-primary border-opacity-20 ${
                    index !== timeTableData.length - 1 ? 'mb-4' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-primary text-white p-4 rounded-xl text-center min-w-[100px]">
                      <div className="text-sm">{session.period}</div>
                      <div className="text-2xl font-bold">{session.time}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">{session.title}</h3>
                      <div className="mb-2">
                        <span className="text-base font-medium text-gray-700">{session.presenter}</span>
                      </div>
                      {session.subtitle && (
                        <p className="text-sm text-gray-600 italic">{session.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 역대 발표 섹션 */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-8 text-center">역대 Public Big Chat 발표 모음</h2>

              {/* 연도 선택 탭 */}
              <div className="flex justify-center mb-8 overflow-x-auto">
                <div className="inline-flex bg-primary bg-opacity-10 rounded-full p-1 shadow-md">
                  {Object.keys(presentationsByYear).map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-6 py-2 rounded-full font-medium transition-colors ${
                        selectedYear === year ? "bg-primary text-white" : "text-primary hover:bg-primary hover:bg-opacity-20"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* 선택된 연도의 발표 목록 */}
              <div className="bg-primary bg-opacity-10 rounded-3xl p-6 shadow-lg">
                <div className="space-y-4">
                  {presentationsByYear[selectedYear]?.map((presentation, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-primary">{presentation.title}</h3>
                          <div className="flex items-center gap-2 text-sm mt-1">
                            <span className="text-gray-600">👤 {presentation.presenter}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <span className="text-sm text-gray-500">{presentation.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
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