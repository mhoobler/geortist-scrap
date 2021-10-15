import { Circle } from "../../../components";
const ConstantsForm = ({ constants, addChild, removeChild }) => {
  const keys = Object.keys(constants);

  const GetComponent = ({ id, data }) => {
    switch (data.type) {
      case "CIRCLE": {
        return <Circle data={data} removeChild={removeChild} />;
      }
      default: {
        throw new Error("Could not find component");
      }
    }
  };

  return (
    <form>
      <fieldset>
        <legend>Constants</legend>
        {keys.map((key) => {
          return <GetComponent key={key} id={key} data={constants[key]} />;
        })}
        <button onClick={addChild}> Add Constant </button>
      </fieldset>
    </form>
  );
};

export default ConstantsForm;
