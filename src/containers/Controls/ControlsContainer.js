import { useState } from "react";

import ControlsForm from "./ControlsForm";

const ControlsContainer = ({ constants, functions }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <div className="controls-container">
      <button onClick={handleShow} data-testid="functions-select">
        _
      </button>
      {show ? (
        <div className="functions-container" data-testid="functions-container">
          <ControlsForm />
        </div>
      ) : null}
    </div>
  );
};

export default ControlsContainer;
