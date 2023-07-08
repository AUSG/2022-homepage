import type { NextPage } from 'next';
import Head from 'next/head';
import BlogSection from '@/src/_pages/index/components/BlogSection';
import FAQSection from '@/src/_pages/index/components/FAQSection';
import IntroSection from '@/src/_pages/index/components/IntroSection';
import MainSection from '@/src/_pages/index/components/MainSection';
import MemberSection from '@/src/_pages/index/components/MemberSection';
// import SubscribeSection from '@/src/_pages//index/components/SubscribeSection';

const Home: NextPage = () => (
  <div className="">
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
);

export default Home;
