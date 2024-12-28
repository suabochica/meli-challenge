import { useEffect, useState } from "react";
import { useParams } from "react-router";

import DetailedItem from "@/components/DetailedItem";

function ItemDetails() {
  const [product, setProduct] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`
    https://api.mercadolibre.com/items/${params.id}
    `)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (product) {
    return <DetailedItem item={product} />;
  } else {
    return null;
  }
}

export default ItemDetails;
