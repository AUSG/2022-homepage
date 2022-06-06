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
      <div
        className="flex cursor-pointer items-center gap-[8px]"
        onClick={toggleContent}
      >
        <QuestionIcon className="fill-[#212121]" />
        <span className="text-[14px] leading-[22px] xl:text-[24px] xl:leading-[36px]">
          {title}
        </span>
        <ChevronUpIcon
          className={`rotate-180 fill-[#212121] ${
            showContent ? 'rotate-0' : ''
          }`}
        />
      </div>

      {showContent && (
        <div className="mt-[16px] rounded-[20px] bg-white py-[14px] px-[16px] text-[14px] leading-[22px] xl:mt-[20px] xl:text-[16px] xl:leading-[28px]">
          {description}
        </div>
      )}
    </div>
  );
}
