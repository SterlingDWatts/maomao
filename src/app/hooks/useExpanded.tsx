import * as React from "react";

export default function useExpanded() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return { expanded, handleExpandClick };
}
