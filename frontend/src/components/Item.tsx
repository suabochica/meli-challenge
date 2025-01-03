import { Link } from "react-router";
import formatPrice from "@/utils/formatPrice";

import type { Item } from "@/types/item";

export default function Item({ item }: { item: Item }) {
  const { id, title, picture, thumbnail, price, free_shipping, condition } =
    item;

  console.log("Item", item);

  return (
    <li className={"items-list-item flex items-center"}>
      <Link
        to={{
          pathname: `/items/${id}`,
        }}
      >
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={thumbnail}
          alt={title}
        />
      </Link>
      <div className={"item-data"}>
        <p className={"item-price"}>
          {price.amount && formatPrice(price)}
          {price.decimals ? (
            <span className={"item-price-decimals"}>{price.decimals}</span>
          ) : null}
        </p>
        {free_shipping ? (
          <span className={"item-free-shipping"}>Env&iacute;o Gratis!</span>
        ) : null}
        <Link
          className={"item-title"}
          to={{
            pathname: `/items/${id}`,
          }}
        >
          <p>{title}</p>
        </Link>
      </div>
      <p className={"item-condition"}>
        {condition === "new" ? "Nuevo" : "Usado"}
      </p>
    </li>
  );
}
