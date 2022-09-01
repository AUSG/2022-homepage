import React, { FC } from 'react';
import Image from 'next/image';

import JinsuBae from 'public/people/naru200.jpg';
import QuoteIcon from 'public/icons/quote.svg';
import GithubIcon from 'public/icons/github.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';

interface IntroCardProps {
  name_ko: string;
  name_en: string;
  short_bio: string;
  github_username: string;
  linkedin_username: string;
}

const IntroCard: FC<IntroCardProps> = ({
  name_ko,
  name_en,
  short_bio,
  github_username,
  linkedin_username,
}) => {
  return (
    <div className="flex flex-shrink-0 rounded-2xl p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
      <div className="mr-3 h-12 flex-shrink-0 basis-12 overflow-hidden rounded-full">
        <Image src={JinsuBae} alt={`${name_ko}_사진`} />
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="mr-3 text-base font-bold">{name_ko}</h2>
          <a
            href={`https://github.com/${github_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1 px-1"
          >
            <GithubIcon className="h-4 w-4 fill-gray-400" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${linkedin_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1 px-1"
          >
            <LinkedinIcon className="h-4 w-4 fill-gray-400" />
          </a>
        </div>
        <div className="mt-2 flex">
          <QuoteIcon className="-mt-1.5 mr-1 fill-primary text-[24px]" />
          <div className="text-[14px]">{short_bio.substring(0, 50)}</div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
