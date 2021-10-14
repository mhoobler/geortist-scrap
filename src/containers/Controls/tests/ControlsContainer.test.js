import { render, screen, fireEvent } from "@testing-library/react";

import ControlsContainer from "../ControlsContainer";

const dummyProps = {
  constants: {},
  functions: {},
};

test("renders on the screen as closed", () => {
  render(<ControlsContainer {...dummyProps} />);
  const functions = screen.queryAllByTestId("functions-container");

  expect(functions.length).toBe(0);
});

test("clicking on button shows functions-container", () => {
  render(<ControlsContainer {...dummyProps} />);
  const button = screen.getByTestId("functions-select");
  fireEvent.click(button);

  const functions = screen.getByTestId("functions-container");

  expect(functions).toBeInTheDocument();
});
