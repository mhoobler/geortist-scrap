const ConstantsForm = ({ constants, addChild, removeChild }) => {
  const keys = Object.keys(constants);

  const GetComponent = ({ id, obj }) => {
    switch (obj.type) {
      case "CIRCLE": {
        return (
          <fieldset data-testid={`fieldset-${id}`}>
            <legend>
              {obj.type}{" "}
              <button onClick={removeChild} data-testid={`close-${id}`}>
                x
              </button>
            </legend>
            <div>
              <label>x: </label>
              <input />
            </div>
          </fieldset>
        );
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
          return <GetComponent key={key} id={key} obj={constants[key]} />;
        })}
        <button onClick={addChild}> Add Constant </button>
      </fieldset>
    </form>
  );
};

export default ConstantsForm;
