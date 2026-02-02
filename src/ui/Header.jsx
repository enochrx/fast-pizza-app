import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-rose-500 uppercase">
      <Link className="font-extrabold tracking-[1rem]" to="/">
        <div className="inline-flex items-center justify-between">
          <img
            src="../../public/pizza.png"
            alt="pizza.png"
            className="max-h-10 w-auto md:max-h-12"
          />
          Swift Pizza Co.
        </div>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
