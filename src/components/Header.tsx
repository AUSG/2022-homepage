import React, { useMemo } from 'react';
import Link from 'next/link';
import MenuIcon from 'public/icons/menu.svg';
import LogoWhite from 'public/images/logo-white.svg';
import LogoColor from 'public/images/logo-color.svg';
import FacebookIcon from 'public/icons/facebook.svg';
import GithubIcon from 'public/icons/github.svg';
import MediumIcon from 'public/icons/medium.svg';
import YoutubeIcon from 'public/icons/youtube.svg';

interface HeaderProps {
  theme?: 'white' | 'colored';
}

export default function Header({ theme = 'white' }: HeaderProps) {
  const fillColor = useMemo(() => {
    if (theme === 'white') return 'fill-primary';
    return 'fill-white';
  }, [theme]);

  const externalLinks = useMemo(
    () => [
      {
        url: 'https://www.facebook.com/ausgkr',
        icon: <FacebookIcon width="36" height="36" className={fillColor} />,
      },
      {
        url: 'https://www.youtube.com/channel/UCaN1L9bj7pCuv1PiKzx-2rQ',
        icon: <YoutubeIcon width="36" height="36" className={fillColor} />,
      },
      {
        url: 'https://medium.com/ausg-kr',
        icon: <MediumIcon width="36" height="36" className={fillColor} />,
      },
      {
        url: 'https://github.com/AUSG',
        icon: <GithubIcon width="36" height="36" className={fillColor} />,
      },
    ],
    [fillColor]
  );

  return (
    <div className="md:mx-auto md:max-w-screen-xl">
      <div className="flex h-[60px] items-center justify-between md:h-[120px]">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex h-full items-center px-[20px] md:mr-[80px]">
              {theme === 'white' ? (
                <LogoColor
                  height="auto"
                  className="aspect-[92/16] w-[92px] md:w-[200px]"
                />
              ) : (
                <LogoWhite
                  height="auto"
                  className="aspect-[92/16] w-[92px] md:w-[200px]"
                />
              )}
            </a>
          </Link>
          <div className="hidden items-center md:flex">
            <Link href="/contact">
              <a
                className={`font-bold ${
                  theme === 'white' ? 'text-primary' : 'text-white'
                }`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="flex h-full items-center px-[20px] md:hidden"
        >
          <MenuIcon className={`h-[24px] w-[24px] ${fillColor}`} />
        </button>
        <div className="-mr-[16px] hidden items-center md:flex">
          {externalLinks.map(({ url, icon }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mr-[36px] ${fillColor}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
