import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>AUSG 7기 지원하기</title>
      </Head>
      <div className="h-screen w-screen overflow-hidden">
        <iframe
          src="https://tally.so/r/3NrKyO?transparentBackground=1"
          width="100%"
          height="100%"
          title="AUSG 7기 지원하기"
        />
      </div>
    </>
  );
};

export default Index;
