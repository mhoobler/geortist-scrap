import { render, screen, fireEvent } from "@testing-library/react";

import ControlsContainer from "../ControlsContainer";

const dummyProps = {
  constants: {},
  functions: {},
};

test("renders on the screen with functions form", () => {
  render(<ControlsContainer {...dummyProps} />);
  const functions = screen.getByText("Functions");
  expect(functions).toBeInTheDocument();
});

test("clicking on button shows constants form", () => {
  render(<ControlsContainer {...dummyProps} />);

  const button = screen.getByTestId("constants-show");
  fireEvent.click(button);

  const constants = screen.getByText("Constants");
  expect(constants).toBeInTheDocument();
});

test("we can go back to functions form", () => {
  render(<ControlsContainer {...dummyProps} />);

  const showConstants = screen.getByTestId("constants-show");
  const showFunctions = screen.getByTestId("functions-show");
  fireEvent.click(showConstants);
  fireEvent.click(showFunctions);

  const functions = screen.getByText("Functions");
  expect(functions).toBeInTheDocument();
});
