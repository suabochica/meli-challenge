
import {FC} from "react";
import "./Breadcrumb.scss";

interface BreadCrumbProps {
  categories: string[];
}

const BreadCrumb: FC<BreadCrumbProps> = ({ categories }) => {
  return (
    <ol className={"breadcrumb"}>
      {categories &&
        categories.map(category => (
          <li className={"breadcrumb-item"} key={category}>
            {category}
          </li>
        ))}
    </ol>
  );
}

export default BreadCrumb;