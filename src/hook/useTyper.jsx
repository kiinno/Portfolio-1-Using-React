import { useEffect, useState } from "react";

const useTyper = (text, duration, track = [], start) => {
  const [counter, setCounter] = useState(start ?? 0);
  const [typerStatus, changeTyperStatus] = useState(false);
  const trackCondition = track.length > 1 ? track[1] : true;
  console.log(track);
  useEffect(() => {
    if (counter <= text.length && trackCondition) {
      window.setTimeout(() => setCounter(counter + 1), duration ?? 40);
    } else {
      changeTyperStatus(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, text.length, duration, trackCondition]);

  return [text.substring(0, counter), typerStatus];
};

export default useTyper;
