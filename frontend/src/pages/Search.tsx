import { useState, useEffect } from "react";

import BreadCrumb from "@/components/BreadCrumb";
import ItemList from "@/components/ItemList";

export default function Search({ search }: { search: string | null }) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setItems(data.items);
          setCategories(data.categories);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  return items.length > 0 ? (
    <>
      <BreadCrumb categories={categories} />
      <ItemList items={items} />
    </>
  ) : null;
}
