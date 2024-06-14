import Head from 'next/head';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const Index = () => {
  const targetDate = dayjs('2024-06-27 23:59:59').tz('Asia/Seoul').toDate(); // 8기 지원 마감일 (KST)

  const krCurrentDate = dayjs().tz('Asia/Seoul').toDate(); // 한국 시간 기준 현재 시간

  if (krCurrentDate > targetDate) {
    return (
      <>
        <Head>
          <title>AUSG 8기 지원하기</title>
        </Head>
        <div className="flex h-screen w-screen items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-primary">
            8기 지원이 마감되었습니다.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>AUSG 8기 지원하기</title>
      </Head>
      <div className="h-screen w-screen overflow-hidden">
        <iframe
          src="https://tally.so/r/w4k1Zb?transparentBackground=1"
          width="100%"
          height="100%"
          title="AUSG 8기 지원하기"
        />
      </div>
    </>
  );
};

export default Index;
