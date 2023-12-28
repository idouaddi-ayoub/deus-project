import React, { useRef, useState, useEffect } from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container!.offsetLeft);
      setScrollLeft(container!.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container!.offsetLeft;
      const walk = (x - startX) * 1; // Adjust scrolling speed if needed
      container!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    container?.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      className="overflow-x-auto whitespace-no-wrap user-select-none"
      onMouseDown={(): void => {
        document.body.style.cursor = "grabbing";
      }}
      onMouseLeave={(): void => {
        document.body.style.cursor = "";
      }}
      onMouseEnter={(): void => {
        document.body.style.cursor = "grab";
      }}
      onMouseUp={(): void => {
        document.body.style.cursor = "grab";
      }}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;
