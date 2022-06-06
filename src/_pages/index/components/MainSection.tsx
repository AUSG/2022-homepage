import React, { Fragment } from 'react';
import CheckIcon from 'public/icons/check.svg';
// import ArrowRightIcon from 'public/icons/arrow_right.svg';
import MainImage3x from 'public/images/main_x3.png';
import Image from 'next/image';

const cards = [
  {
    title: '발표를 통해 지식을 공유해요',
    description: [
      `생생한 경험과 유익한 지식을 서로 나눠요.`,
      '다양한 주제로 토론해요.',
    ],
  },
  {
    title: '만나고, 모이고, 함께 즐겨요.',
    description: ['사소한 계기로 새로운 사람을 만나고, 친해져요.'],
  },
  {
    title: '함께 배우고 성장해요.',
    description: ['다양한 스터디에 참가하고  같은 목표를 향해 달려 나가요.'],
  },
];

export default function MainSection() {
  return (
    <div className="flex flex-col px-[20px] pt-[48px] pb-[40px] md:mx-auto md:max-w-screen-xl xl:py-[100px]">
      <h1 className="text-[24px] font-bold leading-[34px] text-gray-900 xl:text-[36px] xl:leading-[54px]">
        프로젝트, 교육이 아닌 <br className="xl:hidden" />
        서로 공유하는 커뮤니티
      </h1>

      <div className="mt-[36px] flex flex-col xl:mt-[0] xl:flex-row-reverse xl:justify-between">
        <div className="h-[234px] w-[306px] self-center xl:h-[504px] xl:w-[660px]">
          <Image src={MainImage3x} alt="ausg" />
        </div>

        <section className="mt-[32px] flex flex-col gap-y-[12px] xl:w-[full] xl:min-w-[500px] xl:items-start xl:gap-y-[60px]">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className={`flex items-center rounded-[20px] bg-gray-100 pt-[4px] pr-[15px] pb-[12px] pl-[10px] xl:py-[20px] xl:px-[24px] xl:pr-[80px] ${
                idx % 2 !== 0 ? 'xl:self-end' : ''
              }`}
            >
              <CheckIcon className="mr-[8px] shrink-0 text-primary" />
              <div>
                <h3 className="font-bold leading-[36px] xl:mb-[8px] xl:text-[24px]">
                  {card.title}
                </h3>
                <p className="text-[12px] leading-[18px] text-gray-900 xl:text-[14px] xl:leading-[24px]">
                  {card.description.map(desc => (
                    <Fragment key={desc}>
                      {desc}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="flex justify-center">
        {/* TODO: 액티비티 페이지 개발 후 주석 해제하기 */}
        {/* <button
          type="button"
          className="mt-[36px] flex items-center gap-x-[8px] rounded-[20px] bg-primary py-[6px] px-[48px] text-[14px] font-bold leading-[36px] text-white"
        >
          AUSG 활동 더 살펴보기
          <ArrowRightIcon className="h-[24px] w-[24px] text-white" />
        </button> */}
      </div>
    </div>
  );
}
