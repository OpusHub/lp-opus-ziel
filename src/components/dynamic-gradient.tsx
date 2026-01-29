'use client';

import { useRef, useState, useEffect, RefObject } from "react";
import { useMousePositionRef } from "@/components/hooks/use-mouse-position-ref";

export default function DynamicGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useMousePositionRef(containerRef as RefObject<HTMLElement>);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const updatePosition = () => {
      setPosition({ ...positionRef.current });
    };
    const interval = setInterval(updatePosition, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isMounted, positionRef]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10 w-full h-full pointer-events-none overflow-hidden"
    >
      {/* Dynamic gradient that follows mouse - azul claro */}
      <div
        className="w-full h-full absolute transition-[background] duration-200"
        style={{
          background: `radial-gradient(circle 800px at ${position.x}px ${position.y}px, rgba(79, 192, 219, 0.15), transparent 60%)`,
        }}
      />
    </div>
  );
}
