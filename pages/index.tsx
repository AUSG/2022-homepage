import type { NextPage } from 'next';
import Head from 'next/head';
import BlogSection from '@/_pages/index/components/BlogSection';
import FAQSection from '@/_pages/index/components/FAQSection';
import IntroSection from '@/_pages/index/components/IntroSection';
import MainSection from '@/_pages/index/components/MainSection';
import MemberSection from '@/_pages/index/components/MemberSection';
// import SubscribeSection from '@/_pages//index/components/SubscribeSection';

const Home: NextPage = () => (
  <div className="flex justify-center">
    {/* TODO: 데스크톱 대응 */}
    <div className="max-w-[390px]">
      <Head>
        <title>AUSG</title>
      </Head>

      <IntroSection />
      <MainSection />
      <MemberSection />
      <BlogSection />
      <FAQSection />
      {/* TODO: implement subscribe */}
      {/* <SubscribeSection /> */}

      <footer />
    </div>
  </div>
);

export default Home;
