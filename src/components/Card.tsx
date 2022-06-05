import React from 'react';
import Image from 'next/image';

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
  backgroundImageUrl = 'https://placeimg.com/200/240/tech',
  author,
}: Props) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="h-[240px] w-[196px] rounded-[20px] bg-white">
        <div>
          <Image
            width="200"
            height="152"
            src={backgroundImageUrl}
            alt={title}
            className="rounded-tl-[20px] rounded-tr-[20px] object-cover"
          />
        </div>
        <div className="px-[8px] pt-[12px] text-[14px] leading-[22px]">
          {title}
        </div>
      </div>
    </a>
  );
}
