import { useState, useEffect } from "react";
import { Canvas, Controls } from "./containers";
import "./App.css";

function App() {
  const [resolution, setResolution] = useState({
    width: window.innerHeight,
    height: window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
      console.log("fire");
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resolution]);

  return (
    <div className="App">
      <Controls />
      <Canvas {...resolution} />
    </div>
  );
}

export default App;
