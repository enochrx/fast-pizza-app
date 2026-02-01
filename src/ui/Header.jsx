import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Swift Pizza Co.</Link>
      <SearchOrder />
      <p>Ray Cuisine</p>
    </header>
  );
};

export default Header;
