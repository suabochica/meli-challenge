import { ItemDescriptionType, ItemType } from "@/models/item.model";

export function parseItemData(
  itemData: ItemType,
  itemDescription?: ItemDescriptionType
): any {
  const [amount, decimals] = itemData.price.toString().split(".");

  // Implement the logic for parsing and combining the data
  return {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: parseInt(amount),
      decimals: parseInt(decimals),
    },
    description: itemDescription
      ? itemDescription.plain_text || itemDescription.text
      : undefined,
    picture: itemData.thumbnail,
    condition: itemData.condition,
  };
}
