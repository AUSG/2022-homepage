import { FC } from 'react';
import clsx from 'clsx';
import { VISIBLE_PEOPLE_YEARS_ORDER } from '@/src/lib/config';

interface ScrollNavigationProps {
  currentTab: typeof VISIBLE_PEOPLE_YEARS_ORDER[number];
}

const ScrollNavigation: FC<ScrollNavigationProps> = ({ currentTab }) => {
  return (
    <div
      className="mx-6 -mt-8 flex items-center gap-4 pt-12 lg:justify-center"
      id={`tab_${currentTab}`}
    >
      {VISIBLE_PEOPLE_YEARS_ORDER.map(tab => (
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
