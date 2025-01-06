export type SearchResult =  {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number
  };
  picture: string;
  currency_id: string;
  address: {
    state_name: string;
    city_name: string;
  }
}