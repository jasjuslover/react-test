import { renderHook, waitFor } from "@testing-library/react";
import { useMovies } from "./useMovies";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

describe("useMovies", () => {
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
    fetchSpy.mockRestore();
  });

  it("should fetch movies", async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(
      () => {
        expect(result.current.movies).toEqual([{ title: "Star Wars" }]);
      },
      {
        timeout: 1000,
      }
    );
  });

  it("fetch movie error", async () => {
    const mockResolveValue = {
      ok: false,
      json: () => null,
    };

    fetchSpy.mockReturnValue(mockResolveValue);

    const { result } = renderHook(() => useMovies());

    await waitFor(
      () => {
        expect(result.current.movies).toEqual([]);
      },
      {
        timeout: 1000,
      }
    );
  });
});
