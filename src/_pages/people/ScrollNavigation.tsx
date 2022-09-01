import { FC } from 'react';
import clsx from 'clsx';

const TAB = ['6th', '5th', '4th', '3rd', '2nd', '1st'];

interface ScrollNavigationProps {
  currentTab: typeof TAB[number];
}

const ScrollNavigation: FC<ScrollNavigationProps> = ({ currentTab }) => {
  return (
    <div className="mx-6 mt-5 flex items-center gap-4 lg:justify-center">
      {TAB.map(tab => (
        <div
          key={tab}
          className={clsx(
            tab === currentTab
              ? 'border-b-primary text-primary'
              : 'border-b-gray-300 text-gray-300',
            'cursor-pointer border-b-2 font-semibold lg:text-2xl'
          )}
        >{`${parseInt(tab, 10)}기`}</div>
      ))}
    </div>
  );
};

export default ScrollNavigation;
