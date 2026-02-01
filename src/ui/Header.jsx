import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header className="bg-rose-500 uppercase">
      <Link className="font-extrabold tracking-[1rem]" to="/">
        Swift Pizza Co.
      </Link>
      <SearchOrder />
      <p>Ray Cuisine</p>
    </header>
  );
};

export default Header;
