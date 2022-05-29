import React, { Fragment } from 'react';
import CheckIcon from 'public/icons/check.svg';
import ArrowRightIcon from 'public/icons/arrow_right.svg';

type Props = {};

export default function MainSection({}: Props) {
  return (
    <div className="px-[20px] pt-[48px] pb-[40px]">
      <h1 className="text-[28px] font-bold leading-[36px] text-gray-900">
        프로젝트, 교육이 아닌 <br />
        서로 공유하는 커뮤니티
      </h1>
      <img src="images/main.png" alt="ausg" className="mt-[12px] text-white" />

      <section className="mt-[32px] flex flex-col gap-y-[12px]">
        {cards.map(card => (
          <div className="flex items-center rounded-[20px] bg-gray-100 pt-[4px] pr-[15px] pb-[12px] pl-[10px]">
            <CheckIcon className="mr-[8px] shrink-0" />
            <div>
              <h3 className="font-bold leading-[36px]">{card.title}</h3>
              <p className="text-[12px] leading-[18px] text-gray-900">
                {card.description.map((desc, idx) => (
                  <Fragment key={idx}>
                    {desc}
                    <br />
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        <button className="mt-[60px] flex items-center gap-x-[8px] rounded-[20px] bg-primary py-[6px] px-[48px] text-[14px] font-bold leading-[36px] text-white">
          AUSG 활동 더 살펴보기
          <ArrowRightIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

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
