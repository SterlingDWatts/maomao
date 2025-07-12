import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimerBox from "./timerBox";

interface TimerBoxProps {
  distance: number;
  estimate?: boolean;
}

export default function Timer({ distance, estimate = false }: TimerBoxProps) {
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
        backgroundColor: "rgba(139, 139, 139, 0.3)",
        borderRadius: 2,
      }}
    >
      {estimate && (
        <Typography
          variant="subtitle1"
          component="div"
          color="white"
          sx={{
            fontWeight: "bold",
            lineHeight: 1,
            minWidth: "60px",
            padding: 1,
          }}
        >
          ESTIMATED
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TimerBox time={days} timeUnit={"days"} />
        {!estimate && (
          <>
            <TimerBox time={hours} timeUnit={"hours"} />
            <TimerBox time={minutes} timeUnit={"minutes"} />
            <TimerBox time={seconds} timeUnit={"seconds"} />
          </>
        )}
      </Box>
    </Box>
  );
}
