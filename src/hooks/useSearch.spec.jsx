import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useSearch } from "./useSearch";

describe("useSearch", () => {
  it("should return default search term and original items", () => {
    const items = [{ title: "Star Wars" }];

    const { result } = renderHook(() => useSearch(items));

    expect(result.current.searchTerm).toBe("");
    expect(result.current.filteredItems).toEqual(items);
  });
});
