import { FC } from 'react';
import clsx from 'clsx';

const TAB = ['7th', '6th', '5th', '4th', '3rd', '2nd', '1st'];

interface ScrollNavigationProps {
  currentTab: typeof TAB[number];
}

const ScrollNavigation: FC<ScrollNavigationProps> = ({ currentTab }) => {
  return (
    <div
      className="mx-6 -mt-8 flex items-center gap-4 pt-12 lg:justify-center"
      id={`tab_${currentTab}`}
    >
      {TAB.map(tab => (
        <a
          href={`#tab_${tab}`}
          key={tab}
          className={clsx(
            tab === currentTab
              ? 'border-b-primary text-primary'
              : 'border-b-gray-300 text-gray-300',
            'border-b-2 font-semibold lg:text-2xl'
          )}
        >{`${parseInt(tab, 10)}기`}</a>
      ))}
    </div>
  );
};

export default ScrollNavigation;
