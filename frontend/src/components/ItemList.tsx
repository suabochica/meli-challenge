import Item from "@/components/Item";

import type { Item as ItemType } from "@/types/item";

export default function ItemList({ items }: { items: ItemType[] }) {
  return (
    <ol>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ol>
  );
}
