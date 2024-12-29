type CategoryData = {
  path_from_root?: { name: string }[];
};

export const getCategoryById = async (
  id: string,
): Promise<string[] | undefined> => {
  let categories: string[] = [];

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/categories/${id}`,
    );
    const data: CategoryData = await response.json();

    categories = data.path_from_root?.map((category) => category.name) ?? [];

    return categories;
  } catch (error) {
    console.error(`Error fetching category tree for category ID ${id}:`, error);
    return undefined;
  }
};
