import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Control visibility based on device

  useEffect(() => {
    // Check if the device is a laptop/desktop
    const isDesktop = window.innerWidth > 1024 && !/Mobi|Android/i.test(navigator.userAgent);
    setIsVisible(isDesktop);

    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      setIsMoving(true);

      // Calculate direction of motion
      const dx = x - prevPosition.x;
      const dy = y - prevPosition.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert to degrees
      setRotation(angle);

      // Update previous position
      setPrevPosition({ x, y });

      // Stop movement status after a short delay
      clearTimeout(window.cursorTimeout);
      window.cursorTimeout = setTimeout(() => setIsMoving(false), 50);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prevPosition]);

  if (!isVisible) return null; // Don't render on smaller devices

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transform ${
        isMoving ? "w-5 h-1.5" : "w-3 h-3"
      } transition-all duration-100 ease-out bg-orange-500 rounded-full`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${isMoving ? rotation : 0}deg)`,
      }}
    ></div>
  );
};

export default CustomCursor;
