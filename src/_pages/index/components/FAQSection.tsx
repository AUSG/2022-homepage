import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import Dropdown from '@/components/Dropdown';
import QUESTIONS from '@/constants/questions';
import Link from 'next/link';
import { event } from '@/lib/gtag';

export default function FAQSection() {
  const handleClick = () => {
    event({
      action: 'contact',
      category: 'click',
      label: '아직 궁금한 점이 있다면',
      value: 1,
    });
  };

  return (
    <div className="bg-gray-100">
      <div className="relative flex flex-col px-[20px] py-[48px] xl:mx-auto xl:max-w-screen-xl xl:py-[100px]">
        <div className="xl:flex-row">
          <h1
            className="text-[24px] font-bold leading-[34px] text-gray-900
            xl:absolute xl:left-[20px] xl:text-[36px] xl:leading-[52px]"
          >
            FAQ
          </h1>
          <div className="mt-[36px] flex-1 xl:ml-[180px] xl:mt-[8px]">
            <section className="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-y-[48px] xl:gap-x-[80px]">
              {QUESTIONS.map(question => (
                <Dropdown
                  key={question.title}
                  title={question.title}
                  description={question.description}
                />
              ))}
            </section>
          </div>
        </div>

        <Link href="/contact" onClick={handleClick}>
          <a>
            <button
              type="button"
              className="mx-auto mt-[36px] flex items-center rounded-[20px] bg-primary py-[6px] px-[48px] xl:mt-[60px]"
            >
              <span className="mr-[8px] text-[14px] font-bold leading-[36px] text-white xl:text-[16px] xl:leading-[48px]">
                아직 궁금한 점이 있다면
              </span>
              <ArrowRightIcon className="h-[24px] w-[24px] fill-white" />
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
