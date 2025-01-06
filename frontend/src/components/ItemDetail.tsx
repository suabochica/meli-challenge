import Badge from "@/components/Badge";
import type { Item } from "@/types/item";

import formatPrice from "@/utils/formatPrice";

export default function ItemDetail({ item }: { item: Item }) {
  const conditions = {
    new: " Nuevo",
    used: " Usado",
    not_specified: "",
  };

  return (
    <div className="detailed-item-picture-desc-column flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <img
          className="detailed-item-picture w-full h-full object-cover"
          src={item.picture}
          alt={item.title}
        />
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700">Precio: </span>
            <span className="text-gray-600 "> 
          {item.price.amount && formatPrice(item.price)}
</span>
          </div>
          <div>
            <Badge
              condition={item.condition ? conditions[item.condition] : ""}
            />
          </div>
        </div>

        <button className="detailed-item-buy-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Comprar
        </button>
      </div>
    </div>
  );
}
