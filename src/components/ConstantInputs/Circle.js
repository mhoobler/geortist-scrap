const Circle = ({ data, removeChild, handleChange }) => {
  const { x, y, r, name, id } = data;
  return (
    <fieldset data-testid={`fieldset-${id}`}>
      <legend>
        <span>{name}</span>
        <button onClick={removeChild} data-testid={`close-${id}`}>
          x
        </button>
      </legend>
      <div>
        <label htmlFor={`input-${id}-x`}>x: </label>
        <input id={`input-${id}-x`} value={x} onChange={handleChange} />
        <label htmlFor={`input-${id}-y`}>y: </label>
        <input id={`input-${id}-y`} value={y} onChange={handleChange} />
        <label htmlFor={`input-${id}-r`}>r: </label>
        <input id={`input-${id}-r`} value={r} onChange={handleChange} />
      </div>
    </fieldset>
  );
};

export default Circle;
