export type SearchResult =  {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  currency_id: string;
  address: {
    state_name: string;
    city_name: string;
  }
}