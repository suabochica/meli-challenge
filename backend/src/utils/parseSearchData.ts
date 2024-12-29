import { ItemType } from "@/models/item.model";
import { parseItemData } from "@/utils/parseItemData";

type Filter = {
  id: string;
  values: {
    path_from_root?: {
      name: string;
    }[];
  }[];
};

type Data = {
  filters: Filter[];
  results: ItemType[];
};

export type ParsedSearchData = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ReturnType<typeof parseItemData>[];
};

export function parseSearchData(data: Data): ParsedSearchData {
  const parsedSearchData: ParsedSearchData = {
    author: {
      name: "Sergio",
      lastname: "Benítez",
    },
    categories:
      data.filters
        .find((filter) => filter.id === "category")
        ?.values[0].path_from_root?.map((category) => category.name) ?? [],
    items: data.results.slice(0, 4).map((item) => parseItemData(item)),
  };

  return parsedSearchData;
}
