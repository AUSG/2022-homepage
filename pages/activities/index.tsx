import { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';

import Header from '@/components/Header';
import AboutBigChat from '@/_pages/Activities/AboutBigChat';

const Activities = () => {
  const [currentTab, setCurrentTab] = useState<'bigchat' | 'study'>('bigchat');

  return (
    <>
      <Head>
        <title>AUSG - Activities</title>
      </Head>
      <div className="md:mx-auto md:max-w-screen-xl">
        <Header />
        <h1 className="mt-3 ml-5 text-2xl font-bold md:text-center md:text-4xl lg:mb-16">
          Activities
        </h1>
      </div>

      <div className="mt-6 flex items-center">
        <div
          className={clsx(
            currentTab === 'bigchat' && 'border-b-[6px] border-b-gray-800',
            'flex-1 cursor-pointer p-1 text-center font-semibold'
          )}
        >
          BIG CHAT
        </div>
        <div
          className={clsx(
            currentTab === 'study' && 'border-b-[6px] border-b-gray-800',
            'flex-1 cursor-pointer p-1 text-center font-semibold'
          )}
        >
          STUDY
        </div>
      </div>

      {currentTab === 'bigchat' && <AboutBigChat />}
    </>
  );
};

export default Activities;
