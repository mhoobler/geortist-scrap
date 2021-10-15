import { useContext } from "react";

import ControlsContainer from "./ControlsContainer";
import { CanvasContext } from "../../utils/context/CanvasContext";

import "./Controls.css";

/*
 * TODO: replace props with useContext
 */

const ControlsWrapper = (props) => {
  const { state, dispatch } = useContext(CanvasContext);
  console.log(state);

  return (
    <div className="controls-wrapper">
      <ControlsContainer {...state} />
    </div>
  );
};

export default ControlsWrapper;
