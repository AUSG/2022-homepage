import { Fragment } from 'react';
import Head from 'next/head';

import Header from '@/src/components/Header';
import ScrollNavigation from '@/src/_pages/people/ScrollNavigation';
import IntroCard from '@/src/_pages/people/IntroCard';
import { getPeopleData } from '@/data/people';
import { VISIBLE_PEOPLE_YEARS_ORDER } from '@/src/lib/config';

const shuffle = (array: any[], randomNumber: number) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(randomNumber * currentIndex);
    currentIndex -= 1;

    // eslint-disable-next-line no-param-reassign
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const People = ({ randomNumber }: { randomNumber: number }) => {
  const peopleData = getPeopleData();

  return (
    <>
      <Head>
        <title>AUSG - People</title>
      </Head>
      <div className="md:mx-auto md:max-w-screen-xl">
        <Header />
        <h1 className="mt-3 ml-5 text-2xl font-bold md:text-center md:text-4xl lg:mb-16">
          People
        </h1>

        {VISIBLE_PEOPLE_YEARS_ORDER.map(
          tab =>
            peopleData.people.filter(({ year }) => year === tab).length > 0 && (
              <Fragment key={tab}>
                <ScrollNavigation currentTab={tab} />
                <div className="mt-8 mb-6 grid grid-cols-1 gap-y-4 px-5 lg:mt-20 lg:mb-[60px] lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 lg:px-8">
                  {shuffle(
                    peopleData.people.filter(({ year }) => year === tab),
                    randomNumber
                  ).map(person => (
                    <IntroCard key={person.name_en} {...person} />
                  ))}
                </div>
              </Fragment>
            )
        )}
      </div>
    </>
  );
};

// 왜 굳이 랜덤 넘버를 서버에서 생성해서 props로 넘겨주는가?
// => 이렇게 안하면 Server에서 랜덤으로 배치한 UI와 Client에서 랜덤으로 배치한 UI가 서로 달라서 hydration이 실패하기 때문
export const getServerSideProps = async () => ({
  props: { randomNumber: Math.random() },
});

export default People;
