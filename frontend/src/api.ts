const api = {
  item: {
    fetch: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(
        (response) =>
          response.json() as Promise<{
            id: string;
            title: string;
            price: number;
            thumbnail: string;
            currency_id: string;
          }>
      );

      const { plain_text } = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
      ).then(
        (response) =>
          response.json() as Promise<{
            plain_text: string;
          }>
      );

      return {
        ...item,
        description: plain_text,
      };
    },

    search: (
      query: string
    ): Promise<{
      results: {
        id: string;
        title: string;
        price: number;
        thumbnail: string;
        currency_id: string;
        address: {
          state_name: string;
          city_name: string;
        };
      }[];
    }> =>
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`
      ).then(
        (response) =>
          response.json() as Promise<{
            results: {
              id: string;
              title: string;
              price: number;
              thumbnail: string;
              currency_id: string;
              address: {
                state_name: string;
                city_name: string;
              };
            }[];
          }>
      ),
  },
};

export default api;
