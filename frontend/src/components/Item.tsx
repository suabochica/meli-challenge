import { Link } from "react-router";

import Badge from "@/components/Badge";
import formatPrice from "@/utils/formatPrice";

import type { Item } from "@/types/item";

export default function Item({ item }: { item: Item }) {
  const { id, title, picture, price, free_shipping, condition, description } =
    item;

  return (
    <li
      key={id}
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
          src={picture}
          alt={title}
        />
      </Link>
      <div className={"item-data mx-4"}>
        <p className={"item-price"}>
          {price.amount && formatPrice(price)}
          {price.decimals ? (
            <span className={"item-price-decimals"}>{price.decimals}</span>
          ) : (
            ""
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
        <Badge condition={condition === "new" ? "Nuevo" : "Usado"} />
      </div>
    </li>
  );
}
