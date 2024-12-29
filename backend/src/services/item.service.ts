import { ItemDescriptionType, ItemType } from "@/models/item.model";
import { parseProductData } from "@/utils/parsers";

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

    // Parse the data (implement parseProductData based on your requirements)
    const parsedData = parseProductData(itemData, itemDescription);

    return parsedData;
  } catch (error) {
    console.error(`Error fetching data for item ID ${id}:`, error);
  }
};
