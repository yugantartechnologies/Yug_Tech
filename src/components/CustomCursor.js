import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const addHover = () => setIsActive(true);
    const removeHover = () => setIsActive(false);

    document.addEventListener("mousemove", move);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .cursor-magnet");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [location.pathname]);

  // Disable custom cursor on admin portal pages
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot ${isActive ? "cursor-dot--active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-follower ${isActive ? "cursor-follower--active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
