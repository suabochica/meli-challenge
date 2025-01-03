import Item from "@/components/Item";

import type { Item as ItemType } from "@/types/item";

export default function ItemList({ items }: { items: ItemType[] }) {
  console.log("items", items);
  return (
    <ol className="my-10 ml-2">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ol>
  );
}
