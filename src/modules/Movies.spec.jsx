import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import Movies from "./Movies";
import { MemoryRouter } from "react-router";

describe("Movies", () => {
  const fetchSpy = vi.spyOn(global, "fetch");

  beforeAll(() => {
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve({
            results: [{ title: "Star Wars" }],
          })
        ),
    };

    fetchSpy.mockReturnValue(mockResolveValue);
  });

  afterAll(() => {
    cleanup();
    fetchSpy.mockRestore();
  });

  it("render Movies", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Movies />
      </MemoryRouter>
    );

    await waitFor(
      () => {
        expect(getByTestId("movies-list").children.length).toEqual(1);
      },
      {
        timeout: 5000,
      }
    );
  });

  it("search input", async () => {
    const input = screen.getByTestId("search-input-field");
    fireEvent.change(input, { target: { value: "abc" } });

    expect(input.value).toEqual("abc");
  });
});
