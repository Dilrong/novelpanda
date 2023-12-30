"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = dayjs("2024-01-31");
      const currentDate = dayjs();
      const difference = targetDate.diff(currentDate, "second");

      if (difference > 0) {
        const days = Math.floor(difference / (24 * 60 * 60));
        const hours = Math.floor((difference % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((difference % (60 * 60)) / 60);
        const seconds = difference % 60;

        return { days, hours, minutes, seconds };
      }

      return null;
    };

    const updateTimer = () => {
      const time = calculateTimeLeft();
      if (time !== null) {
        setTimeLeft(time);
      }
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerComponents = timeLeft ? (
    <div className="flex items-center space-x-2 text-3xl font-semibold">
      <div className="bg-gray-800 text-white p-2 rounded-md">
        {timeLeft.days}
        <span className="text-gray-400">일</span>
      </div>
      <div className="bg-gray-800 text-white p-2 rounded-md">
        {timeLeft.hours}
        <span className="text-gray-400">시</span>
      </div>
      <div className="bg-gray-800 text-white p-2 rounded-md">
        {timeLeft.minutes}
        <span className="text-gray-400">분</span>
      </div>
      <div className="bg-gray-800 text-white p-2 rounded-md">
        {timeLeft.seconds}
        <span className="text-gray-400">초</span>
      </div>
    </div>
  ) : (
    <p>오픈 특가 종료</p>
  );

  return <div className="mt-4 flex justify-center">{timerComponents}</div>;
}

export default Timer;
