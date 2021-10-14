import ControlsContainer from "./ControlsContainer";
import "./Controls.css";

const ControlsWrapper = () => {
  const dummyProps = {
    constants: {},
    functions: {},
  };
  return (
    <div className="controls-wrapper">
      <ControlsContainer {...dummyProps} />
    </div>
  );
};

export default ControlsWrapper;
