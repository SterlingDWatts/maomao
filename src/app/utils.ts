export const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : num.toString();
};

export const formatSubheader = (
  season?: number,
  episode?: number,
  subheader?: string,
) => {
  if (!season && !episode && !subheader) return "";
  if (season === undefined && episode === undefined) return subheader;
  if (!subheader) return `S${season} E${episode}`;
  return `S${season} E${episode}${subheader && ": "} ${subheader}`;
};

export const getTimeUntil = (distance: number) => {
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
