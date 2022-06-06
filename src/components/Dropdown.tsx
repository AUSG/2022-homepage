import React, { useCallback, useState } from 'react';
import QuestionIcon from 'public/icons/question.svg';
import ChevronUpIcon from 'public/icons/chevron_up.svg';

type Props = {
  title: string;
  description: string;
};

export default function Dropdown({ title, description }: Props) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = useCallback(() => {
    setShowContent(!showContent);
  }, [showContent]);

  return (
    <div>
      <div className="flex items-center gap-[8px]" onClick={toggleContent}>
        <QuestionIcon className="fill-[#212121]" />
        <span className="text-[14px] leading-[22px]">{title}</span>
        <ChevronUpIcon
          className={`fill-[#212121] ${showContent ? 'rotate-180' : ''}`}
        />
      </div>

      {showContent && (
        <div className="mt-[16px] bg-white py-[14px] px-[16px] text-[14px] leading-[22px]">
          {description}
        </div>
      )}
    </div>
  );
}
