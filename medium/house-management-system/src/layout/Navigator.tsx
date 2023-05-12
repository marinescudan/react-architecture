import { Link } from "react-router-dom";

export interface INavigatorProps {}

const Navigator = ({}: INavigatorProps) => {
  return <nav className="navigator">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>;
};

export default Navigator;