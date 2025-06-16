import { useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';

import AboutBigChat from '@/src/_pages/Activities/AboutBigChat';
import Header from '@/src/components/Header';
import AboutAusgCon from '@/src/_pages/Activities/AboutAusgCon';

const Activities = () => {
  const [currentTab, setCurrentTab] = useState<'bigchat' | 'ausgcon'>(
    'bigchat'
  );

  return (
    <>
      <Head>
        <title>AUSG - Activities</title>
      </Head>
      <main>
        <div className="md:mx-auto lg:max-w-screen-xl">
          <Header />
          <h1 className="mb-6 ml-5 mt-3 text-2xl font-bold md:text-center md:text-4xl lg:mb-16">
            Activities
          </h1>
        </div>

        <div className="mt-6 flex items-center">
          <div
            className={clsx(
              currentTab === 'bigchat' && 'border-b-[6px] border-b-gray-800',
              'flex-1 cursor-pointer p-1 text-center font-semibold'
            )}
            onClick={() => setCurrentTab('bigchat')}
          >
            BIG CHAT
          </div>
          <div
            className={clsx(
              currentTab === 'ausgcon' && 'border-b-[6px] border-b-gray-800',
              'flex-1 cursor-pointer p-1 text-center font-semibold'
            )}
            onClick={() => setCurrentTab('ausgcon')}
          >
            AUSGCON
          </div>
        </div>

        {currentTab === 'bigchat' && <AboutBigChat />}
        {currentTab === 'ausgcon' && <AboutAusgCon />}
      </main>
    </>
  );
};

export default Activities;
