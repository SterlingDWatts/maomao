import * as React from "react";

export default function useDistance(eventDate: string) {
  const [distance, setDistance] = React.useState(
    new Date(eventDate).getTime() - new Date().getTime(),
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDistance(new Date(eventDate).getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return distance;
}
