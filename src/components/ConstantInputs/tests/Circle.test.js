import { screen, render, fireEvent } from "@testing-library/react";
import Circle from "../Circle";

const dummyCircle = {
  id: "0",
  x: 100,
  y: 200,
  r: 300,
  name: "Billy",
  type: "CIRCLE",
};

test("renders props correctly", () => {
  render(<Circle data={dummyCircle} />);

  const { x, y, r, name } = dummyCircle;
  const nameElm = screen.getByText(name);
  const xInput = screen.getByDisplayValue(x);
  const yInput = screen.getByDisplayValue(y);
  const rInput = screen.getByDisplayValue(r);

  expect(nameElm).toBeInTheDocument();
  expect(xInput).toBeInTheDocument();
  expect(yInput).toBeInTheDocument();
  expect(rInput).toBeInTheDocument();
});

test("can adjust inptus", () => {
  const handleChange = jest.fn((e) => {});
  render(<Circle data={dummyCircle} handleChange={handleChange} />);

  const { x, y, r } = dummyCircle;
  const xInput = screen.getByDisplayValue(x);
  const yInput = screen.getByDisplayValue(y);
  const rInput = screen.getByDisplayValue(r);

  fireEvent.change(xInput, { target: { value: x + 1 } });
  fireEvent.change(yInput, { target: { value: y + 1 } });
  fireEvent.change(rInput, { target: { value: r + 1 } });

  expect(handleChange).toHaveBeenCalledTimes(3);
});

test("can click removeChild button", () => {
  const handleClick = jest.fn((e) => e.preventDefault());
  render(<Circle data={dummyCircle} removeChild={handleClick} />);

  const removeButton = screen.getByTestId("close-0");
  fireEvent.click(removeButton);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
