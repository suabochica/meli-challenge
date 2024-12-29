import { ItemDescriptionType, ItemType } from "@/models/item.model";

export function parseProductData(
  itemData: ItemType,
  itemDescription: ItemDescriptionType
): any {
  // Implement the logic for parsing and combining the data
  return {
    id: itemData.id,
    title: itemData.title,
    price: itemData.price,
    description: itemDescription.plain_text || itemDescription.text,
  };
}