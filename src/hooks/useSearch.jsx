import { useMemo, useState } from "react";

export const useSearch = (items, filters = ["title"]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return filters.some((filter) => {
        return item[filter].toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [items]);

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
};
