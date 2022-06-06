import React from 'react';

interface Props {
  title: string;
  url: string;
  author: {
    name: string;
    profileImageUrl: string;
  };
  backgroundImageUrl?: string;
}

export default function Card({
  title,
  url,
  backgroundImageUrl = 'https://placeimg.com/444/240/tech',
  author,
}: Props) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="h-[240px] w-[196px] rounded-[20px] bg-white xl:h-[272px] xl:w-[444px]">
        <div className="">
          <img
            src={backgroundImageUrl}
            alt={title}
            className="max-h-[152px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover xl:max-h-[180px]"
          />
        </div>
        <div className="px-[8px] pt-[12px] text-[14px] leading-[22px] xl:px-[20px] xl:pt-[13px]">
          {title}
        </div>
      </div>
    </a>
  );
}
