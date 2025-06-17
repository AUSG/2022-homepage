import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import Dropdown from '@/src/components/Dropdown';
import { QUESTIONS, RECRUIT_QUESTIONS } from '@/src/constants/questions';
import Link from 'next/link';
import { event } from '@/src/lib/gtag';

export default function FAQSection() {
  const handleClick = () => {
    event({
      action: 'contact',
      category: 'click',
      label: '아직 궁금한 점이 있다면',
      value: 1,
    });
  };

  const faqQuestions = [
    ...RECRUIT_QUESTIONS.filter(question => !question.isHidden),
    ...QUESTIONS.filter(question => !question.isHidden),
  ].sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <div className="bg-gray-100">
      <div className="relative flex flex-col px-[20px] py-[48px] xl:mx-auto xl:max-w-screen-xl xl:py-[100px]">
        <div className="xl:flex-row">
          <h1 className="text-[24px] font-bold leading-[34px] xl:absolute xl:left-[20px] xl:text-[36px] xl:leading-[52px]">
            FAQ
          </h1>
          <div className="mt-[36px] flex-1 xl:ml-[180px] xl:mt-[8px]">
            <section className="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[48px]">
              {faqQuestions.map(question => (
                <Dropdown
                  key={question.title}
                  title={question.title}
                  description={question.description}
                />
              ))}
            </section>
          </div>
        </div>

        <Link href="/contact">
          <button
            type="button"
            className="mx-auto mt-[36px] flex items-center rounded-[20px] bg-primary px-[48px] py-[6px] xl:mt-[60px]"
            onClick={handleClick}
          >
            <span className="mr-[8px] text-[14px] font-bold leading-[36px] text-white xl:text-[16px] xl:leading-[48px]">
              아직 궁금한 점이 있다면
            </span>
            <ArrowRightIcon className="h-[24px] w-[24px] fill-white" />
          </button>
        </Link>
      </div>
    </div>
  );
}
