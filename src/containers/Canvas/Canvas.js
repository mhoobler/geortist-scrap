import { useRef, useEffect } from "react";

const draw = (ctx, arr) => {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, Math.PI * 2);
    ctx.stroke();
  }
};

const Canvas = ({ width, height }) => {
  const canvas = useRef(null);

  useEffect(() => {
    const { current } = canvas;

    if (current) {
      current.width = width;
      current.height = height;
      window.requestAnimationFrame(() => draw(current.getContext("2d"), [0]));
    }
  }, [width, height]);

  return <canvas ref={canvas} width={width} height={height}></canvas>;
};

export default Canvas;
