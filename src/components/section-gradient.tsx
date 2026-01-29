'use client';

import { useRef, useState, useEffect, RefObject } from "react";
import { useMousePositionRef } from "@/components/hooks/use-mouse-position-ref";

export default function SectionGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useMousePositionRef(containerRef as RefObject<HTMLElement>);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({ ...positionRef.current });
    };
    const interval = setInterval(updatePosition, 16); // ~60fps
    return () => clearInterval(interval);
  }, [positionRef]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Dynamic gradient that follows mouse */}
      <div
        className="w-full h-full absolute transition-[background] duration-100"
        style={{
          background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, rgba(30, 132, 194, 0.12), transparent 50%)`,
        }}
      />

      {/* Secondary gradient layer */}
      <div
        className="w-full h-full absolute transition-[background] duration-150"
        style={{
          background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(79, 192, 219, 0.06), transparent 60%)`,
        }}
      />
    </div>
  );
}
