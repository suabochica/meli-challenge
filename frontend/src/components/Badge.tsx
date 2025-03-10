export default function Badge({ condition }: { condition: string }) {
  return (
    <span
      className={
        "item-condition bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
      }
    >
      {condition}
    </span>
  );
}
