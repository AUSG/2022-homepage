import BigChatBackgroundTwentyOne from 'public/images/2021-bigchat-background.svg';
import BigChatBackgroundTwentyThree from 'public/images/2023-bigchat-background.svg';

const BigChatBackground = ({ year }: { year: number }) => {
  switch (year) {
    case 2023:
      return <BigChatBackgroundTwentyThree width="100%" height="100%" />;
    case 2021:
      return <BigChatBackgroundTwentyOne width="100%" height="100%" />;
    default:
      return <BigChatBackgroundTwentyThree width="100%" height="100%" />;
  }
};

export default BigChatBackground;
