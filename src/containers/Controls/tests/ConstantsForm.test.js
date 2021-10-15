import { render, screen, fireEvent } from "@testing-library/react";

import { Constants } from "../fieldsets";

// Props
const constants = {
  0: {
    type: "CIRCLE",
    x: 250,
    y: 250,
    r: 50,
  },
};

test("renders on the screen with empty props", () => {
  render(<Constants constants={{}} />);

  const legend = screen.getByText("Constants");
  expect(legend).toBeInTheDocument();
});

test("renders children with props", () => {
  render(<Constants constants={constants} />);

  const fieldset = screen.getByTestId("fieldset-0");
  expect(fieldset).toBeInTheDocument();
});

test("can click 'Add Constant'", () => {
  const handleClick = jest.fn((e) => e.preventDefault());
  render(<Constants constants={constants} addChild={handleClick} />);

  const addButton = screen.getByText("Add Constant");
  fireEvent.click(addButton);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("can click 'Close Child'", () => {
  const handleClick = jest.fn((e) => e.preventDefault());
  render(<Constants constants={constants} removeChild={handleClick} />);

  const removeButton = screen.getByTestId("close-0");
  fireEvent.click(removeButton);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
