import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio('../../../public/tabito.mp3'));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export const MusicPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
{/* <audio src="../../../public/tabito.mp3" controls autoPlay={isPlaying} ref={myAudio}/>  */}