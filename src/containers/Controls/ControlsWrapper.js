import ControlsContainer from "./ControlsContainer";
import "./Controls.css";

/*
 * TODO: replace props with useContext
 */

const ControlsWrapper = (props) => {
  return (
    <div className="controls-wrapper">
      <ControlsContainer {...props} />
    </div>
  );
};

export default ControlsWrapper;
