import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import ReactModal from 'react-modal';
import MenuIcon from 'public/icons/menu.svg';
import LogoWhite from 'public/images/logo-white.svg';
import LogoColor from 'public/images/logo-color.svg';
import FacebookIcon from 'public/icons/facebook.svg';
import GithubIcon from 'public/icons/github.svg';
import MediumIcon from 'public/icons/medium.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import ArrowRight from 'public/icons/arrow_right.svg';
import Close from 'public/icons/close.svg';

interface HeaderProps {
  theme?: 'white' | 'colored';
}

export default function Header({ theme = 'white' }: HeaderProps) {
  const [showSidemenu, setShowSidemenu] = useState(false);
  const closeSidemenu = useCallback(() => setShowSidemenu(false), []);

  const fillColor = useMemo(() => {
    if (theme === 'white') return 'fill-primary';
    return 'fill-white';
  }, [theme]);

  const externalLinks = useMemo(
    () => [
      {
        url: 'https://www.facebook.com/ausgkr',
        icon: <FacebookIcon width="100%" height="100%" className={fillColor} />,
      },
      {
        url: 'https://www.youtube.com/channel/UCaN1L9bj7pCuv1PiKzx-2rQ',
        icon: <YoutubeIcon width="100%" height="100%" className={fillColor} />,
      },
      {
        url: 'https://medium.com/ausg-kr',
        icon: <MediumIcon width="100%" height="100%" className={fillColor} />,
      },
      {
        url: 'https://github.com/AUSG',
        icon: <GithubIcon width="100%" height="100%" className={fillColor} />,
      },
    ],
    [fillColor]
  );

  return (
    <div className="relative md:mx-auto md:max-w-screen-xl">
      <div className="flex h-[60px] items-center justify-between md:h-[120px]">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex h-full items-center px-[20px] md:mr-[80px]">
              {theme === 'white' ? (
                <LogoColor
                  height="100%"
                  className="aspect-[92/16] w-[92px] md:w-[200px]"
                />
              ) : (
                <LogoWhite
                  height="100%"
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
          onClick={() => setShowSidemenu(true)}
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
              className={`mr-[36px] ${fillColor} h-[36px] w-[36px] `}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <ReactModal
        isOpen={showSidemenu}
        onRequestClose={closeSidemenu}
        // eslint-disable-next-line react/no-unstable-nested-components
        contentElement={(props, children) => (
          <div
            {...props}
            style={undefined}
            className="ml-auto h-screen w-[256px] bg-primary px-[20px]"
          >
            {children}
          </div>
        )}
      >
        <div className="flex flex-col">
          <button
            type="button"
            className="-mr-[20px] self-end p-[12px]"
            onClick={closeSidemenu}
          >
            <Close width="24" height="24" fill="white" />
          </button>
          <div className="flex h-[60px] items-center">
            {externalLinks.map(({ url, icon }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-[24px] ${fillColor} h-[24px] w-[24px]`}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="mt-[50px]">
            <Link href="/contact">
              <a className="flex items-center">
                <span className="mr-[8px] text-[24px] font-bold text-white">
                  Contact
                </span>
                <ArrowRight width="36" height="36" fill="white" />
              </a>
            </Link>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
