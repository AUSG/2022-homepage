import React from 'react';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import Dropdown from '@/components/Dropdown';

const questions = [
  {
    title: '신규 모집은 언제 진행되나요?',
    description:
      '새로운 신규 멤버의 경우 6월 초부터 모집이 시작될 예정입니다. 페이스북 주소에서 자세한 사항은 공지를 드릴 예정이니, 참고 부탁드립니다.',
  },
  {
    title: '지원 자격이 어떻게 되나요??',
    description: 'TODO',
  },
  {
    title: '지원 절차가 어떻게 되나요??',
    description: 'TODO',
  },
  {
    title: '어느 정도의 경험이 필요한가요??',
    description: 'TODO',
  },
];

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
              {questions.map(question => (
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
