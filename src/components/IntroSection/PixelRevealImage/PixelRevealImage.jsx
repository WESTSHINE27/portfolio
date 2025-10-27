import React, { useEffect, useRef } from "react";
import "./PixelRevealImage.scss";

const PixelReveal = ({ src, cols = 20, rows = 20, duration = 1 }) => {
  // this ref is to know which component is the pixel container for the pixel effectr
  const gridRef = useRef(null);

  // pixel reveal animation function
  useEffect(() => {
    // get pixel container
    const grid = gridRef.current;
    // get total pixel have 
    const total = cols * rows;
    const tiles = [];

    // create the pixel and push into the pixel container 
    // don't need to take care how to arrange the pixel because we arrange mention how to arrange in PixelRevealImage.scss .grid style
    for (let i = 0; i < total; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      grid.appendChild(tile);
      tiles.push(tile);
    }

    // get center x and y point  
    const centerX = cols / 2;
    const centerY = rows / 2;

    // set the animation time for each pixel 
    tiles.forEach((tile, i) => {
      const x = i % cols;
      const y = Math.floor(i / cols);
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      setTimeout(() => {
        tile.style.opacity = 0;
      }, dist * 50);
    });

    return () => {
      grid.innerHTML = "";
    };
  }, [cols, rows]);

  return (
    <div className="image-wrapper">
      <img src={src} alt="pfp" />
      <div ref={gridRef} className="grid"></div>
    </div>
  );
};

export default PixelReveal;
