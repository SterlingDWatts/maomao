import * as React from "react";
import Box from "@mui/material/Box";
import TimerBox from "./timerBox";

interface TimerBoxProps {
  distance: number;
}

export default function Timer({ distance }: TimerBoxProps) {
  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const getTimeUntil = (distance: number) => {
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const days = Math.floor(distance / oneDay);
    const hours = Math.floor((distance % oneDay) / oneHour);
    const minutes = Math.floor((distance % oneHour) / oneMinute);
    const seconds = Math.floor((distance % oneMinute) / oneSecond);
    return {
      days: formatNumber(days),
      hours: formatNumber(hours),
      minutes: formatNumber(minutes),
      seconds: formatNumber(seconds),
    };
  };
  const { days, hours, minutes, seconds } = getTimeUntil(distance);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 1,
      }}
    >
      <TimerBox time={days} timeUnit={"days"} />
      <TimerBox time={hours} timeUnit={"hours"} />
      <TimerBox time={minutes} timeUnit={"minutes"} />
      <TimerBox time={seconds} timeUnit={"seconds"} />
    </Box>
  );
}
