import React, { FC } from 'react';
import Image from 'next/image';

import QuoteIcon from 'public/icons/quote.svg';
import GithubIcon from 'public/icons/github.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';
import HomeIcon from 'public/icons/home.svg';

interface IntroCardProps {
  name_ko: string;
  name_en: string;
  photo: string;
  short_bio: string;
  github_username?: string;
  linkedin_username?: string;
  homepage_url?: string;
}

const IntroCard: FC<IntroCardProps> = ({
  name_ko,
  name_en,
  photo,
  short_bio,
  github_username,
  linkedin_username,
  homepage_url,
}) => {
  return (
    <div className="flex flex-shrink-0 rounded-2xl p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.1)] lg:p-4">
      <div className="relative mr-3 h-12 flex-shrink-0 basis-12 overflow-hidden rounded-full lg:mr-6 lg:h-24 lg:basis-24 ">
        <Image
          src={`/people/${photo}`}
          alt={`${name_ko}_사진`}
          width={96}
          height={96}
          objectFit="cover"
        />
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="mr-3 text-base font-semibold lg:mr-5 lg:text-2xl">
            {name_ko}
          </h2>
          {github_username && (
            <a
              href={`https://github.com/${github_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 px-1 lg:mr-2"
            >
              <GithubIcon className="h-4 w-4 fill-gray-400 lg:h-5 lg:w-5" />
            </a>
          )}
          {linkedin_username && (
            <a
              href={`https://www.linkedin.com/in/${linkedin_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 px-1 lg:mr-2"
            >
              <LinkedinIcon className="h-4 w-4 fill-gray-400 lg:h-5 lg:w-5" />
            </a>
          )}
          {homepage_url && (
            <a
              href={homepage_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1 px-1 lg:mr-2"
            >
              <HomeIcon className="h-4 w-4 fill-gray-400 lg:h-5 lg:w-5" />
            </a>
          )}
        </div>
        <div className="mt-2 flex lg:mt-4">
          <QuoteIcon className="-mt-0.5 mr-1 flex-shrink-0 fill-primary text-[14px] lg:mr-2 lg:text-[18px]" />
          <div className="text-[14px] lg:text-base">
            {short_bio.substring(0, 100)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
