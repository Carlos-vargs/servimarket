import { useEffect, useState, useMemo } from "react";

/**
 *
 * @param {string} targetDate
 */
function useCountdown(targetDate) {
  const countDownDate = useMemo(
    () => new Date(targetDate).getTime(),
    [targetDate]
  );

  const [countDown, setCountDown] = useState(() => countDownDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
}

const getReturnValues = (countDown) => {
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const days = Math.floor(countDown / _day);
  const hours = Math.floor((countDown % _day) / _hour);
  const minutes = Math.floor((countDown % _hour) / _minute);
  const seconds = Math.floor((countDown % _minute) / _second);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
