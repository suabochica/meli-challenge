import { ItemDescriptionType, ItemType } from "@/models/item.model";

import { parseItemData } from "@/utils/parseItemData";
import {
  parseSearchData,
  type ParsedSearchData,
} from "@/utils/parseSearchData";

export const getItemById = async (id: string): Promise<void> => {
  try {
    const itemDataPromise = fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data: ItemType) => data);

    const itemDescriptionPromise = fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    )
      .then((response) => response.json())
      .then((data: ItemDescriptionType) => data);

    // Await both promises
    const [itemData, itemDescription] = await Promise.all([
      itemDataPromise,
      itemDescriptionPromise,
    ]);

    const parsedData = parseItemData(itemData, itemDescription);

    return parsedData;
  } catch (error) {
    console.error(`Error fetching data for item ID ${id}:`, error);
  }
};

export const searchItemsByName = async (
  query: string
): Promise<ParsedSearchData | undefined> => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const data = await response.json();
    const parsedData = parseSearchData(data);

    return parsedData;
  } catch (error) {
    console.error(`Error fetching search results for query "${query}":`, error);
  }
};
