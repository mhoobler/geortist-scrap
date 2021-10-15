import { useState, useEffect } from "react";
import { Canvas, Controls } from "./containers";

import { constants } from "./utils/dummyData";

import "./App.css";

/*
 * TODO: replace dummyData with Context
 */

function App() {
  const [resolution, setResolution] = useState({
    width: window.innerHeight,
    height: window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
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
      <Controls constants={constants} functions={{}} />
      <Canvas {...resolution} />
    </div>
  );
}

export default App;
