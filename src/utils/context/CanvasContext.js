import { createContext, useReducer } from "react";

function* uniqueGenerator() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
const generator = uniqueGenerator();
const getId = () => generator.next().value;

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_CONSTANT":
    case "ADD_CONSTANT": {
      const id = getId();
      const constants = { ...state.constants };
      constants[id] = payload;

      return {
        ...state,
        constants,
      };
    }

    case "DELETE_CONSTANT": {
      const newState = { ...state };
      delete newState.constants[payload];

      return newState;
    }

    default:
      throw new Error("Could not find action type: " + type);
  }
};

const CanvasContext = createContext({
  state: new Error("still in init state"),
  dispatch: () => console.error("still in init dispatch"),
});

const { Provider } = CanvasContext;

const initState = {
  constants: {},
  functions: {},
};

const CanvasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CanvasContext, CanvasProvider };
