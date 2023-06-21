import React, { useState } from "react";

const Cart = () => {
  const [isMagnified, setIsMagnified] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // toggle the isMagnified state on hover
  const handleMouseEnter = (e) => {
    setIsMagnified(true);
  };

  // reset the isMagnified state on mouse leave
  const handleMouseLeave = (e) => {
    setIsMagnified(false);
  };

  // update the position of the magnifying glass
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };
  return (
    <div className="image-container relative w-[500px] h-[500px]">
      <div
        className={`magnifying-glass ${isMagnified ? "visible" : ""} absolute`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <img
        src="https://skyblue.com.bd/wp-content/uploads/2020/09/Black-Fbd_Westhighland-Whit_1-300x300.jpg"
        alt="My Image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full h-full object-cover cursor-zoom-in"
      />
    </div>
  );
};

export default Cart;
