import React, { useCallback, useState } from 'react';
import AnimateHeight from 'react-animate-height';
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
        <QuestionIcon className="fill-[#212121]" width="24" height="24" />
        <span className="whitespace-pre-line text-[16px] leading-[20px] xl:text-[20px] xl:leading-[24px]">
          {title}
        </span>
        <ChevronUpIcon
          width="24"
          height="24"
          className={`rotate-180 fill-[#212121] ${
            showContent ? 'rotate-0' : ''
          }`}
        />
      </div>

      <AnimateHeight
        className="mt-[16px] overflow-hidden rounded-[20px] bg-white xl:mt-[20px]"
        duration={350}
        height={showContent ? 'auto' : 0}
      >
        <div
          className="m-[20px] whitespace-pre-line text-[14px] leading-[22px] child:mb-[11px] xl:text-[16px] xl:leading-[28px] xl:child:mb-[14px]"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </AnimateHeight>
    </div>
  );
}
