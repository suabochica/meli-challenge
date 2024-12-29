import { z } from "zod";

const ItemDescription = z.object({
  text: z.string(),
  plain_text: z.string(),
});

const Item = z.object({
  id: z.string(),
  title: z.string(),
  description: ItemDescription,
  price: z.number(),
  condition: z.string(),
  thumbnail: z.string(),
});

// Infer the TypeScript types
export type ItemDescriptionType = z.infer<typeof ItemDescription>;
export type ItemType = z.infer<typeof Item>;

export default Item;
