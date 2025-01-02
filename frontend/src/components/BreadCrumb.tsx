interface BreadCrumbProps {
  categories: string[];
}

export default function BreadCrumb({ categories }: BreadCrumbProps) {
  return (
    <ol className={"breadcrumb"}>
      {categories &&
        categories.map((category) => (
          <li className={"breadcrumb-item"} key={category}>
            {category}
          </li>
        ))}
    </ol>
  );
};

