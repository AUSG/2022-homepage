import BigChatBackgroundTwentyOne from 'public/images/2021-bigchat-background.svg';
import BigChatBackgroundTwentyThree from 'public/images/2023-bigchat-background.svg';

const BigChatBackground = ({ year }: { year: 2021 | 2023 }) => {
  if (year === 2021)
    return <BigChatBackgroundTwentyOne width="100%" height="100%" />;

  if (year === 2023)
    return <BigChatBackgroundTwentyThree width="100%" height="100%" />;

  // unreachable component
  return <div />;
};

export default BigChatBackground;
