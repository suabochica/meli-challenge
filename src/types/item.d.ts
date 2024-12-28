export type Item = {
  category_id: string;
  condition?: "new" | "used" | "not_specified";
  currency_id: string;
  description: string;
  id: string;
  picture: string;
  price: Price;
  sold_quantity: number | string;
  thumbnail: string;
  title: string;
};

type Price = {
  amount: number;
  decimals: number;
};
