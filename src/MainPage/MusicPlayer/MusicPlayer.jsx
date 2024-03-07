import React, { useState, useEffect } from "react";


export const MusicPlayer = ({ url, playing }) => {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setPlaying] = useState(playing);


  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    },
    [isPlaying]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

};