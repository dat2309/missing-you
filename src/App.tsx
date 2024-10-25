// src/App.tsx
import React, { useRef, useState } from 'react';
import Popup from './components/Popup';


const App: React.FC = () => {
  const [popups, setPopups] = useState<{ x: number; y: number }[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const createPopups = () => {
    // Play the music
    if (audioRef.current) {
      audioRef.current.play();
    }

    const newPopups = [];
    const width = window.innerWidth - 220; // Account for popup width
    const height = window.innerHeight - 50; // Account for popup height

    for (let i = 0; i < 500; i++) {
      // Randomize position within screen boundaries
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      newPopups.push({ x, y });
    }

    // Gradually add popups with slight delays
    newPopups.forEach((popup, index) => {
      setTimeout(() => {
        setPopups((prevPopups) => [...prevPopups, popup]);
      }, index * 50); // Adjust delay as needed
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-100">
      <button
        onClick={createPopups}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Nhấn này nè !!! 
      </button>

      {/* Audio Element for Background Music */}
      <audio ref={audioRef} src="/tranbonho.mp3" loop />

      {popups.map((popup, index) => (
        <Popup key={index} x={popup.x} y={popup.y} />
      ))}
    </div>
  );
};

export default App;
