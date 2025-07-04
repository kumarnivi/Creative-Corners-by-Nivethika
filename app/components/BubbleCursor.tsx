'use client';
import { useEffect } from 'react';

const CSSCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="cursor fixed w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-50 transition-all duration-75 ease-out"
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );
};

export default CSSCursor;
