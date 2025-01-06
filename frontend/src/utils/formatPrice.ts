export default function formatPrice(price: {
  currency: string;
  amount: { toString: () => string };
}) {
  return `${price.currency === "COP" ? "$ " : "US$ "}${price.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}
