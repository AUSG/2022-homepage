import React from 'react';
import QuoteCard from './QuoteCard';

type Props = {};

export default function MemberSection({}: Props) {
  return (
    <div className="px-[20px] pt-[40px] pb-[80px]">
      <h1 className="text-[28px] font-bold leading-[36px] text-gray-900">
        우리는 대학생이지만 -<br />
        전문가가 될 수 있다!
      </h1>

      <section>
        <QuoteCard />
      </section>
    </div>
  );
}
