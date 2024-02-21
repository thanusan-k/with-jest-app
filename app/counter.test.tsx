import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter"

describe("Counter Component", () => {
  const renderCounter = (label: string, labelColor: string) => render(<Counter label={label} labelColor={labelColor} />);

  test("renders counter with initial count of 0", () => {
    // Arrange & Act
    renderCounter("", "");

    // Assert
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("0");
  });

  test("renders counter with initial count of 0", () => {
    // Arrange
    renderCounter("Counter", "blue");

    // Act
    const counterElement = screen.getByRole("heading");

    // Assert
    expect(counterElement).toHaveTextContent("0");
  });

  test("increments count when button is clicked", () => {
    // Arrange
    renderCounter("Counter", "blue");

    // Act
    fireEvent.click(screen.getByRole("button"));

    // Assert
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });

  // Add more test cases as needed
});
