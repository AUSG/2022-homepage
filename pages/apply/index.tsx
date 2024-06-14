import Head from 'next/head';

const Index = () => {
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
