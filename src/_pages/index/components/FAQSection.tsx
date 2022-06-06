import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import Dropdown from '@/components/Dropdown';
import { QUESTIONS } from '@/constants';

export default function FAQSection() {
  return (
    <div className="bg-gray-100">
      <div className="relative flex flex-col px-[20px] py-[48px] md:mx-auto md:max-w-screen-xl md:py-[100px]">
        <div className="md:flex-row">
          <h1
            className="text-[24px] font-bold leading-[34px] text-gray-900
            md:absolute md:left-[20px] md:text-[36px] md:leading-[52px]"
          >
            FAQ
          </h1>
          <div className="mt-[36px] flex-1 md:ml-[180px] md:mt-[8px]">
            <section className="flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-y-[48px] md:gap-x-[80px]">
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

        <a href="https://tally.so/r/w447O5" target="_blank" rel="noreferrer">
          <button
            type="button"
            className="mx-auto mt-[36px] flex items-center rounded-[20px] bg-primary py-[6px] px-[48px] md:mt-[60px]"
          >
            <span className="mr-[8px] text-[14px] font-bold leading-[36px] text-white md:text-[16px] md:leading-[48px]">
              아직 궁금한 점이 있다면
            </span>
            <ArrowRightIcon className="h-[24px] w-[24px] fill-white" />
          </button>
        </a>
      </div>
    </div>
  );
}
