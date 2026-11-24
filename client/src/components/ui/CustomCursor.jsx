import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reducedMotion) return;

    setEnabled(true);

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [data-cursor="hover"]');
      setHovering(Boolean(target));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${pos.x - (hovering ? 22 : 14)}px, ${pos.y - (hovering ? 22 : 14)}px, 0)`,
        }}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-[width,height,border-color,background-color] duration-200 ${
          hovering
            ? 'w-11 h-11 border border-amber-400/70 bg-indigo-500/10'
            : 'w-7 h-7 border border-indigo-500/55 bg-transparent'
        }`}
      />
      <div
        aria-hidden="true"
        style={{ transform: `translate3d(${pos.x - 2.5}px, ${pos.y - 2.5}px, 0)` }}
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full bg-indigo-600 dark:bg-amber-400 pointer-events-none z-[9999]"
      />
    </>
  );
}