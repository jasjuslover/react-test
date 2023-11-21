import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("render Counter", () => {
    const { getByRole, getByTestId } = render(<Counter />);

    fireEvent.click(getByRole("button"));
    expect(getByTestId("count").textContent).toBe("1");
  });
});
