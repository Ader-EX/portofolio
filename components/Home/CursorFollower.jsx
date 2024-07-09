import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${
          e.clientX - 10
        }px, ${e.clientY - 10}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        left: "0",
        top: "-5px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "#FFFFFF",
        zIndex: 9999,
        pointerEvents: "none",
        boxShadow: "0 0 5px 1px #F0F0F0, 0 0 8px 2px #F0F0F0",
        transform: "translate3d(-5px, -5px, 0)",
      }}
    />
  );
};

export default CursorFollower;
