'use client';

import { useEffect, useState } from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import { TbPlayerPauseFilled } from 'react-icons/tb';

import { GrPowerReset } from 'react-icons/gr';
import { MdSkipNext } from 'react-icons/md';

// ──────────────────────────────────────────────────── 🟩 ─
const Pomodoro = () => {
  const [session, setSession] = useState(25);
  const [minutes, setMinutes] = useState(session);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);
  const [play, setPlay] = useState(false);
  /* Handler ____________________________________________ */
  const handlePlay = () => {
    setPlay(!play);
  };
  const handleSession = () => {
    if (session === 25) {
      setSession(5);
      setMinutes(5);
      setSeconds(0);
    } else {
      setMinutes(25);
      setSession(25);
      setSeconds(0);
    }
  };
  const handleReset = () => {
    setMinutes(session);
    setSeconds(0);
  };

  /* UseEffect __________________________________________ */
  /* UseEffect __________________________________________ */
  useEffect(() => {
    let interval;

    if (play) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let newMinutes = message ? 24 : 4;
            let newSeconds = 59;

            setSeconds(newSeconds);
            setMinutes(newMinutes);
            setMessage(!message);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [play, seconds, minutes, message]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="font-4xl flex flex-col items-center gap-4 justify-center h-full pt-20">
      {message && <div>Break Time!</div>}
      <div className="text-4xl text-red-600 flex items-center justify-center shadow-lg font-bold border-black border-2 w-40 h-40 rounded-full">
        {timerMinutes}:{timerSeconds}
      </div>
      <div className="flex text-4xl  gap-6 w-fit">
        <div className="flex gap-4 w-fit">
          {play ? (
            <TbPlayerPauseFilled onClick={handlePlay} />
          ) : (
            <VscDebugStart onClick={handlePlay} />
          )}
        </div>
        <GrPowerReset onClick={handleReset} />
        <MdSkipNext onClick={handleSession} />
      </div>
    </div>
  );
};

export default Pomodoro;
