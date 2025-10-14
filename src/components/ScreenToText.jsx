import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ children }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const resizingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const resizeText = () => {
      if (resizingRef.current) return;
      resizingRef.current = true;

      const containerWidth = container.offsetWidth;
      if (!containerWidth) {
        resizingRef.current = false;
        return;
      }

      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = `${mid}px`;

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = `${Math.max(1, max)}px`;
      resizingRef.current = false;
    };

    // 🕒 Delay a bit to ensure layout is stable
    const delayedResize = () => setTimeout(resizeText, 50);

    // Run after layout + small delay
    requestAnimationFrame(delayedResize);

    const observer = new ResizeObserver(() => {
      if (!resizingRef.current) resizeText();
    });
    observer.observe(container);

    window.addEventListener("resize", resizeText);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div
      className="w-full mx-auto flex items-end justify-center px-4 overflow-hidden"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap font-[400] me text-center mix-blend-difference text-white leading-none block"
        ref={textRef}
      >
        {children}
      </span>
    </div>
  );
};
