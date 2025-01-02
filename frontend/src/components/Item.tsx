import { Link } from "react-router";
import formatPrice from "@/utils/formatPrice";

import type { Item } from "@/types/item";

export default function Item({ item }: { item: Item }) {
  const { id, title, picture, price, free_shipping, condition } = item;
  return (
    <li className={"items-list-item"}>
      <Link
        to={{
          pathname: `/items/${id}`,
        }}
      >
        <img src={picture} alt={title} />
      </Link>
      <div className={"item-data"}>
        <p className={"item-price"}>
          {formatPrice(price)}
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
