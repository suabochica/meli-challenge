import { Link } from "react-router";
import formatPrice from "@/utils/formatPrice";

import type { Item } from "@/types/item";

export default function Item({ item }: { item: Item }) {
  const { id, title, thumbnail, price, free_shipping, condition, description } =
    item;

  console.log("Item", item);

  return (
    <li
      className={
        "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100"
      }
    >
      <Link
        to={{
          pathname: `/items/${id}`,
        }}
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={thumbnail}
          alt={title}
        />
      </Link>
      <div className={"item-data"}>
        <p className={"item-price"}>
          {price.amount && formatPrice(price)}
          {price.decimals ? (
            <span className={"item-price-decimals"}>{price.decimals}</span>
          ) : (
            "$ 99.99"
          )}
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
        </Link>
      </div>
      <p className={"item-condition"}>
        {condition === "new" ? "Nuevo" : "Usado"}
      </p>
    </li>
  );
}
