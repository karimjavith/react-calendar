import React, { useEffect, useRef } from "react";
import dateFns from "date-fns";
import { RDCContext } from "../../..";

export const SameHour = () => {
  const { systemDate } = React.useContext(RDCContext);
  const getMin = dateFns.getMinutes(systemDate);
  const topPosition = getMin < 30 ? (getMin > 15 ? "2rem" : "1rem") : "3.5rem";
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current &&
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
    return () => {};
  });
  return (
    <div
      style={{ top: topPosition, marginLeft: "-15px" }}
      className="same-hour-container"
      ref={ref}
    />
  );
};
