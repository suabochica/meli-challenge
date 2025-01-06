import { z } from "zod";

const ItemDescription = z.object({
  text: z.string(),
  plain_text: z.string(),
});

const Item = z.object({
  id: z.string(),
  title: z.string(),
  description: ItemDescription,
  currency_id: z.string(),
  price: z.object({
    currency: z.string(),
    amount: z.number(),
    decimals: z.number(),
  }),
  condition: z.string(),
  picture: z.string(),
  thumbnail: z.string(),
  free_shipping: z.boolean(),
});

// Infer the TypeScript types
export type ItemDescriptionType = z.infer<typeof ItemDescription>;
export type ItemType = z.infer<typeof Item>;

export default Item;
