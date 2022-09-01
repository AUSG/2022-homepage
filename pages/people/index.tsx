import Head from 'next/head';

import Header from '@/components/Header';
import ScrollNavigation from '@/_pages/people/ScrollNavigation';
import IntroCard from '@/_pages/people/IntroCard';

import peopleData from 'data/people.json';

const People = () => {
  return (
    <>
      <Head>
        <title>AUSG - People</title>
      </Head>
      <div className="md:mx-auto md:max-w-screen-xl">
        <Header />
        <h1 className="mt-3 ml-5 text-2xl font-bold md:text-center md:text-4xl">
          People
        </h1>

        {/* 6th tab */}
        <ScrollNavigation currentTab="6th" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '6th')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>

        {/* 5th tab */}
        <ScrollNavigation currentTab="5th" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '5th')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>

        {/* 4th tab */}
        <ScrollNavigation currentTab="4th" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '4th')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>

        {/* 3rd tab */}
        <ScrollNavigation currentTab="3rd" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '3rd')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>

        {/* 2nd tab */}
        <ScrollNavigation currentTab="2nd" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '2nd')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>

        {/* 1st tab */}
        <ScrollNavigation currentTab="1st" />
        <div className="mt-5 px-5">
          {peopleData.people
            .filter(({ year }) => year === '1st')
            .map(person => (
              <IntroCard key={person.name_en} {...person} />
            ))}
        </div>
      </div>
    </>
  );
};

export default People;
