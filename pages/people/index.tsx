import Head from 'next/head';

import Header from '@/components/Header';
import ScrollNavigation from '@/_pages/people/ScrollNavigation';
import IntroCard from '@/_pages/people/IntroCard';

import peopleData from 'data/people.json';

const TAB = ['6th', '5th', '4th', '3rd', '2nd', '1st'];

const People = () => {
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

        {TAB.map(tab => (
          <>
            <ScrollNavigation key={`tab_${tab}`} currentTab={tab} />
            <div className="mt-8 mb-6 grid grid-cols-1 gap-y-4 px-5 lg:mt-20 lg:mb-[60px] lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 lg:px-8">
              {peopleData.people
                .filter(({ year }) => year === tab)
                .map(person => (
                  <IntroCard key={person.name_en} {...person} />
                ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default People;
