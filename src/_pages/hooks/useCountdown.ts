import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date): number[] => {
  const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;

      if (timeLeft <= 0) {
        setCountDown(0);
        clearInterval(interval);
        return;
      }

      setCountDown(timeLeft);
    }, 1000);

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export default useCountdown;
