import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "@/components/ItemDetail";

export default function Detail() {
  const [item, setItem] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`
    http://localhost:3000/api/items/${params.id}
    `)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setItem(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  if (item) {
    return (
      <>
        <h1 className="hidden">Detail Page</h1>
        <ItemDetail item={item} />;
      </>
    );
  } else {
    return null;
  }
}
