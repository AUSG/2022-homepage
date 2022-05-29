import type { NextPage } from 'next';
import Head from 'next/head';
import BlogSection from '@/_pages/index/components/BlogSection';
import FAQSection from '@/_pages/index/components/FAQSection';
import IntroSection from '@/_pages/index/components/IntroSection';
import MainSection from '@/_pages/index/components/MainSection';
import MemberSection from '@/_pages/index/components/MemberSection';
import SubscribeSection from '@/_pages/index/components/SubscribeSection';
import Header from '@/components/Header';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>AUSG</title>
      <meta
        name="description"
        content="AUSG는 대학생 개발자를 위한 클라우드 커뮤니티입니다."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <IntroSection />
    <MainSection />
    <MemberSection />
    <BlogSection />
    <FAQSection />
    <SubscribeSection />

    <footer />
  </div>
);

export default Home;
