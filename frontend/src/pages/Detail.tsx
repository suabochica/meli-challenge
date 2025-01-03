import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "@/components/ItemDetail";

function Detail() {
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
    return <ItemDetail item={item} />;
  } else {
    return null;
  }
}

export default Detail;
