export type Item = {
  category_id: string;
  condition?: "new" | "used" | "not_specified";
  currency_id: string;
  description: string;
  id: string;
  picture: string;
  free_shipping: boolean;
  price: Price;
  sold_quantity: number | string;
  picture: string;
  title: string;
};

type Price = {
  currency: string;
  amount: number;
  decimals?: number;
};
