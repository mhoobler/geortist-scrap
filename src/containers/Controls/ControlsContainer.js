import { useState } from "react";

import { Constants, Functions } from "./fieldsets";

const ControlsContainer = ({ constants, functions }) => {
  const [show, setShow] = useState("functions");

  const handleShowFunctions = () => setShow("functions");
  const handleShowConstants = () => setShow("constants");

  return (
    <div className="controls-container">
      <button onClick={handleShowFunctions} data-testid="functions-show">
        F
      </button>
      <button onClick={handleShowConstants} data-testid="constants-show">
        C
      </button>
      {show === "functions" ? (
        <div
          className="functions forms-container"
          data-testid="functions-container"
        >
          <Functions />
        </div>
      ) : show === "constants" ? (
        <div
          className="constants forms-container"
          data-testid="constants-container"
        >
          <Constants constants={constants} />
        </div>
      ) : null}
    </div>
  );
};

export default ControlsContainer;
